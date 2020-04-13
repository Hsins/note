# Lecture 04 - Amdahls Law

## Integrated Circuit Cost

積體電路的成本可以用以下三個公式來表示：

$$
\text{Cost per die} = \frac{\text{Cost per wafer}}{\text{Dies per wafer} \times \text{Yield}}
$$

$$
\text{Dies per wafer} \approx \frac{\text{Wafer area}}{\text{Die area}}
$$

$$
\text{Yield} = \frac{1}{[1 + (\text{Defects per area} \times \text{Die area})]^2}
$$

- Nonlinear relation to area and defect rate:
  - Wafer cost and area are fixed
  - Defect rate determined by manufacturing process
  - Die area determined by architecture and circuit design

## SPEC CPU Benchmark

### Workload and Benchmark

要評價兩台計算機之間的性能，可以透過比較 **工作負載（workload）** 所運行的時間來完成，或是使用一組專門用於測量性能的 **基準測試程序 (benchmark)**：

- **工作負載（workload）**：運行在計算機上的一組程序，可以直接使用用户的一组實際應用程序，也可以從實際程序中創建，一個典型的工作負載必須指明程序和相應的頻率。
- **基準測試程序 (benchmark)**：用於比較計算機性能的程序。

### SPEC

SPEC (system perlormance evaluation cooperative) 是由許多計算機銷售商共同支持的組織，為現代計算機系統建立了基準測試程序集，用以評估 CPU, I/O, Web... 的效能。 當前最新的標準是 [SPEC CPU 2006](https://www.spec.org/cpu2006/)：

- 包括 12 個整數基準程序集（CINT 2006）和 17 個浮點基準程序集（CFP 2006）
- 忽略 I/O 讀寫時間，專注於 CPU 效能
- 將被測計算機的執行時間進行標準化（執行時間除上參考處理器執行時間），即 SPECratio
- CINT2006 或 CFP2006 的綜合測試結果是取 SPECratio 的幾何平均值

$$
\sqrt[n]{\prod_{i=1}^{n} \text{Execution time ratio}_{i}}
$$

### SPECINTC 2006 Benchmarks running on Intel Core i7 920

![](https://i.imgur.com/M8i9ins.png)

## SPEC Power Benchmark

### SPECpower

由於能源損耗日益重要，SPEC 增加了一組用於評估功耗的基準測試程序 SPECpower（源自於 Java 商用 SPEC 基準程序 SPECJBB2005）。為了簡化計算結果，採用數字 `overall ssj—ops per watt` 表示：

$$
\text{Overall ssj\_ops per Watt} = \frac{\sum_{i=0}^{10} \text{ssj\_ops}_{i}}{\sum_{i=0}^{10} \text{power}\_{i}}
$$

其中 $\text{ssj\_ops}$ 為工作負載在每 10% 增量處的性能，$\text{power}$ 是對應的功耗。

### SPECpower_ssj2008 running on a dual socket Intel Xeon X5650

![](https://i.imgur.com/qL9n9eF.png)

## Pitfall: Amdahl's Law

### Amdahl's Law

改進後的程式執行時間可以使用 **Amdahl's Law** 計算：

$$
T_{\text{improved}} = \frac{T_{\text{affected}}}{\text{improvemen t factor}} + T_{\text{unaffected}}
$$

上式闡述了 **對於特定改進的性能提升可能由所使用的改進特徵數量所限制**，驗證了經濟學上的邊際效益遞減法則。

### An Example for Amdahl's Law

舉個例子說：

> 假設一個程式在一台計算機上運行需要 100 秒，其中的 80 秒的時間用於乘法操作。若要將該程式的運行速度提高五倍，則乘法操作速度應該改進多少？

由 Amdahl's Law 可知：

$$
\frac{80}{5} = \frac{80}{n} + (100-80)
$$

$$
\implies 20 = \frac{80}{n} + 20
$$

由上可知無論怎样改進乘法操作，也不可能使性能達到五倍的結果。

## Pitfall: MIPS as a Performance Metric

**每秒百萬條指令（MIPS, Millions of Instructions Per Second）** 是一種取代時間來衡量效能的方法。對於一個給定的程式，MIPS 表示為：

$$
\begin{aligned}
  \text{MIPS} &= \frac{\text{Instruction Count}}{\text{Execution time} \times 10^6} \\
                  &= \frac{\text{Instruction Count}}{\frac{\text{Instruction count} \times \text{CPI}}{\text{Clock Rate}} \times 10^6} = \frac{\text{Clock rate}}{\text{CPI} \times 10^6}
\end{aligned}
$$

採用 MIPS 作為指標沒有考慮到以下問題：

- Differences in ISAs between computers
- Differences in complexity between instructions
- CPI varies between programs on a given CPU
