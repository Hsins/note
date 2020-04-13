# Lecture 03 - Performance

## Performance

### Response Time and Throughput

對於計算機來說，要衡量性能通常有兩個指標：

- **響應時間（Response Time）**: 又稱為執行時間（execution time），指計算機完成某任務所需的總時長，包括了硬體訪問、內存訪問、I/O 訪問、作業系統開銷和 CPU 執行時間…等一切開銷。
- **吞吐率（Throughput）**: 也叫帶寬（bandwidth），表示單位時間內可以完成的任務數量。

不同類別的計算機所著重的點不盡相同，比如個人電腦會傾向於降低響應時間，而伺服器則更看重吞吐率。

### Relative Performace

在絕大多數的狀況下，降低響應時間幾乎都可以增加吞吐率，因此我們可以簡單遞將性能定義為執行時間的倒數：

$$\text{Performace} = \frac{1}{\text{Execution Time}}$$

## Execution Time and CPU Clocking

### Measuring Execution Time

執行時間可以根據計量的方式選用不同的表示方法：

- **消逝時間（elapsed time）**：表示完成任務所需的總時間，包括了硬體訪問、內存訪問、I/O 訪問、作業系統開銷和 CPU 執行時間…等一切開銷。又稱為牆上時鐘時間（wall clock time）或響應時間（response time）。
- **CPU 執行時間（CPU execution time）**：多個用戶經常共享使用同一台計算機，此時更著重於運行自己任務的時間，也就是只考慮在 CPU 上所花費的時間而不計入 I/O 設備等待時間。
  - 用戶 CPU 時間（user CPU time）
  - 系統 CPU 時間（system CPU time）

### CPU Clocking

![](https://i.imgur.com/UjZ3i9h.png)

我們通常會使用 **時脈頻率（clock rate）** 來評估處理器效能，指的是同步電路中時鐘的基礎頻率，為時鐘週期的倒數，單位為赫茲（Hz）：

- Clock Period: duration of a clock cycle
  - e.g., $250 \text{ps} = 0.25 \text{ns} = 250 \times 10^{-12} \text{s}$
- Clock Frequency (Rate): cycles per second
  - e.g., $4.0 \text{GHz} = 4000 \text{MHz} = 4.0 \times 10^9 \text{Hz}$

### CPU Time

$$
\begin{aligned}
  \text{CPU Time} &= \text{CPU Clock Cycles} \times \text{Clock Cycle Time} \\
                  &= \frac{\text{CPU Clock Cycles}}{\text{Clock Rate}}
\end{aligned}
$$

由上式可知，如果要增進效能：

- Reducing number of clock cycles
- Increasing clock rate
- Hardware designer must often trade off clock rate against cycle count

### CPU Time Example

> 有一程式在一台時脈頻率為 $2 \text{GHz}$ 的計算機 A 上運行需要 10 秒。現在將設計一台 B 計算機，希望將運行時間縮短為 6 秒。 若設計者採用提高時脈頻率的方式，但會使得運行的時間週期數為在計算機 A 上的 1.2 倍，則應該將時脈頻率提高到多少？

依題意可知：

$$
\text{Clock Rate}_{B} = \frac{\text{Clock Cycles}_{B}}{\text{CPU Time}_{B}} = \frac{1.2 \times \text{Clock Cycles}_{A}}{6 \text{s}}
$$

其中計算機 A 上運行需要多少時間週期數：

$$
\begin{aligned}
\text{Clock Cycles}_{A} &= \text{CPU Time}_{A} \times \text{Clock Rate}_{A} \\
                        &= 10 \text{s} \times 2 \text{GHz} = 20 \times 10^{9}
\end{aligned}
$$

因此可得：

$$
\text{Clock Cycles}_{B} = \frac{1.2 \times 20 \times 10^{9}}{6 \text{s}} = 4 \text{GHz}
$$

### Instruction Count and CPI

前面的公式並沒有涉及程式所需要的指令數目，但實際上計算機是透過執行指令來運行程式，考慮執行每條指令所需的時間週期數（CPI, Cycle per Instruction）：

$$
\text{Clock Cycles} = \text{Instruction Count} \times \text{Cycles per Instruction}
$$

$$
\begin{aligned}
  \text{CPU Time} &= \text{Instruction Count} \times \text{CPI} \times \text{Clock Cycle Time} \\
                  &= \frac{\text{Instruction Count} \times \text{CPI}}{\text{Clock Rate}}
\end{aligned}
$$

> 如果把同一份程式代碼分別在 RISC 和 CISC 上進行編譯，則在 CISC 上所需要的指令數會較少，因為 CISC 一個指令可以處理較多的事情。然而這並不代表 RISC 較 CISC 差。

### CPI Example 01

> 假設有相同指令集的兩種不同實現方式，在計算機 A 上的時鐘週期為 250ps, 對某程式的 CPI 為 2.0；而在計算機 B 上的時鐘週期為 500ps， 對同一程式的 CPI 為 1.2。則該程序在哪一台計算機上的執行速度較快？快多少？

對於同一程式而言，在不同計算機上執行指令的總數是相同的：

$$
\text{CPU Time} = \text{Instruction Count} \times \text{CPI} \times \text{Cycle Time}
$$

亦即：

$$
\frac{\text{CPU Time}_{B}}{\text{CPU Time}_{A}} = \frac{I \times 1.2 \times 500 \text{ps}}{I \times 2.0 \times 250 \text{ps}} = 1.2
$$

在計算機 A 上執行的速度較計算機 B 上快 1.2 倍。

### CPI Example 02

![](https://i.imgur.com/tcUbVga.png)

### CPI in More Detail

![](https://i.imgur.com/bkE6mDP.png)

### Performance Summary

![](https://i.imgur.com/rUuQaYF.png)

## Power Trends

![](https://i.imgur.com/0dQbzfn.png)

## Reducing Power

![](https://i.imgur.com/hlL9baG.png)

## Multiprocessor

![](https://i.imgur.com/0OBd6CL.png)
