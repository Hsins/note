# Lecture 05 - Language of the Computer

## Instruction Set and the MIPS Instruction Set

計算機語言中的基本單詞稱為指令，一台計算機的全部指令稱為該計算機的指令集（instruction set) ，在這門課和使用的教科書中將採用 [MIPS](https://www.mips.com/) 架構指令集。

## Operations

### Arithmetic Operations

任何計算機都必須能夠執行基礎的算術運算，在 MIPS 組合語言中的表示方式為：

```assembly
add a, b, c
```

上面的表示方式為固定，每條的 MIPS 指令只執行一个操作，並且有且僅有 3 個變數。這樣滿足設計原則的第一條 **Simplicity favours regularity**：

- Regularity makes implementation simpler
- Simplicity enables higher performance at lower cost

### Arithmetic Example

> 將 C 語言中的複雜語句 `f = (g + h) - (i + j)` 編譯成 MIPS

```assembly
add    0 , g , h    # temp t0 = g + h
add    t1, i , j    # temp t1 = i + j
sub    f , t0, t1   # f = t0 - t1
```

## Register and Memory

### Register Operands

MIPS 算數運算指令來自暫存器（Register），在 MIPS 架構中暫存器大小為 32 位：

- 採用序號 0 到 31 表示相應的暫存器
- 32 位的資料稱為一個字節（word）

在 MIPS 書寫指令時使用 `$` 加上兩個字符來表示暫存器：

- `$t0`, `$t1`... 表示臨時變量
- `$s0`, `$s1`... 表示儲存變量

這樣的設計滿足了設計原則第二條 **Smaller is faster**

### Register Operands Example

> 將程式中的變數與暫存器進行對應是編譯器的工作。比如前面的例子 `f = (g + h) - (i + j)` 來說，變數 `f` 到 `j` 依次分配給暫存器 `$s0` 到 `$s4`。請問編譯後的 MIPS 代碼是什麼？

```assembly
add    $t0, $s1, $s2    # reg $t0 contains g + h
add    $t1, $s3, $s4    # reg $t1 contains i + j
sub    $s0, $t0, $t1    # f gets $t0 - $t1
```

### Memory Operands

處理器只能夠將少量的資料存放在暫存器中，大量的資料必須存放於記憶體內，由於 MIPS 只對暫存器進行操作，因此必須 MIPS 必須包含有在暫存器和記憶體中傳送資料的指令，即：資料傳送指令（data transfer instruction）。

<div style="text-align: center"><img src="https://i.imgur.com/yurQyB9.png" width="250" /></div>

如上圖所示，記憶體是一個下標為 0 開始的一維陣列，地址（address）相當於陣列下標，要訪問記憶體時必須給定地址。將資料從記憶體複製到暫存器的資料傳送指令為取數（load）指令，與之相對應的為存數指令，其格式為：

```assembly
lw    目標暫存器   用来訪問記憶體的常數和暫存器
sw    目標暫存器   用来訪問記憶體的常數和暫存器
```

### Memory Operands Example 01

> 已知 A 是一個含有 100 個字的陣列，編譯器將暫存器 `$s1`, `s2` 依次分配给變數 `g` 和 `h`。假設陣列 A 的基礎地址（base address）存放在暫存器 `$s3` 中。試編譯賦值語句 `g = h + A[8]`？

注意此處一個字為 4 Bytes，因此偏移量為 32：

```assembly
lw    $t0, 32($s3)    # temp reg $t0 gets A[8]
add   $s1, $s2, $t0   # g = h + A[8]
```

### Memory Operands Example 02

> 假設變數 `h` 存放在暫存器 `$s2` 中，陣列 A 的基礎地址存放在暫存器 `$s3` 中。試編譯賦值語句 `A[12] = h + A[8]`？

```assembly
lw    $t0, 32($s3)    # temp reg $t0 gets A[8]
add   $t0, $s2, $t0   # temp reg $t0 gets h + A[8]
sw    $t0, 48($s3)    # store h + A[8] back into A[12]
```

### Register vs. Memory

- 暫存器的訪問速度要要比記憶體來的更快
- 存放於記憶體中的資料要進行運算，必須進行取數和存數操作
- 程式中的變數個數多於暫存器個數，編譯器必須盡可能地使用暫存器，將最常使用到的變數保持在暫存器中，而將其他變數存放在記憶體
  - Only spill to memory for less frequently used variables
  - Register optimization is important!

## Constant and Immediate Operands

程式中經常會在操作中使用到常數（實際上運行 SPEC CPU 2006 基準測試會有一半的 MIPS 算數運算指令會使用到常數），對於常數操作若還要涉及寄存器的存取操作並不恰當，因此定義了加立即數（add immediate）操作 `addi` 和常數零 `$zero`：

```assembly
addi    $s3, $s3, 4        # $s3 = $s3 + 4
addi    $s2, $s1, -1       # There is no subtract immediate instruction
addi    $t2, $s1, $zero    # $t2 = $s1 + 0
```

滿足了設計原則的第三條 **Make the common case fast**：

- Small constants are common
- Immediate operand avoids a load instruction

## Unsigned and Signed Number

### Unsigned Binary Intergers

在硬體中，數字由高低不同的電位表示，因此採用二進制數位（binary digit）表示，推廣到任意進制時，第 $i$ 位 $d$ 的值為 $d \times \text{Base}^{i}$，給定 n 位的數，可以表示如下：

$$
x = x_{n-1} 2^{n-1} + x_{n-1} 2^{n-2} + \cdots + x_{1} 2^1 + x_{0} 2^0
$$

比如：

$$
\begin{align}
& 0000 \, 0000 \, 0000 \, 0000 \, 0000 \, 0000 \, 0000 \, 1011_2\\
&= 0 + \cdots + 1 \times 2^{3} + 0 \times 2^2 + 1 \times 2^1 + 1 \times 2^0 \\
&= 11_{10}
\end{align}
$$

在 MIPS 中的字有 32 位，可以表示從 $0$ 到 $2^{32} - 1$ 之間的數，這些正數稱為無符號數（unsigned integer）。

### 2s-Complement Signed Integers

由於程式對正數和負數都要進行計算，因此必須有方法來表示正數與負數，最顯而易見地方法就是增加一個獨立的符號位，這種方法稱為符號和幅值 (sign and magnitude) 表示法。

最廣為被人接受的解決方案是採用 **二進制補數（two's complement）** 來表示：當前導位為 0 表示正數；反之，前導位為 1 表示負數。當給定 n 位的數，可以表示如下：

$$
x = -x_{n-1} 2^{n-1} + x_{n-1} 2^{n-2} + \cdots + x_{1} 2^1 + x_{0} 2^0
$$

比如：

$$
\begin{aligned}
& 1111 \, 1111 \, 1111 \, 1111 \, 1111 \, 1111 \, 1111 \, 1100_2\\
&= -1 \times 2^{31} + 1 \times {2}^{30} + \cdots + 1 \times {2}^{2} + 0 \times {2}^{1} + 0 \times {2}^{0} \\
&= -4_{10}
\end{aligned}
$$

在 MIPS 架構採用二進制補數可以表示從 $-2^{31}$ 到 $2^{31} - 1$ 之間的數。

### Sign Negate

一個關於補數的概念是任意數與其按位取反的相加結果必為 $-1$，透過此原則可以快速求得補數：

$$
x + \bar{x} = 1111 \cdots 1111_{2} = -1
$$

$$
\bar{x} + 1 = x
$$

舉例來說：

- $+2 = 0000 \cdots 0010_2$
- $-2 = 1111 \cdots 1101_2 + 1 = 1111 \cdots 1110_2$

### Sign Extension

在 MIPS 指令集中所提供的立即數字段採用 16 位的數表示：

- `addi`: extend immediate value
- `lb`, `lh`: extend loaded byte/halfword
- `beq`, `bne`: extend the displacement

若要將這些數加到 32 位的暫存器，必須將 16 位的數轉換成數值上相等的 32 位的數，可以透過符號擴展（sign extension）的方法将原有的 16 位數簡單地複製到 32 位數的後 16 位，其最高有效位則已複製的方式填滿。比如：

- $+2$: $\color{red}{0}000 \, 0010$ → $\color{red}{0000 \, 0000 \, 0}000 \, 0010$
- $-2$: $\color{red}{1}111 \, 1110$ → $\color{red}{1111 \, 1111 \, 1}111 \, 0010$

## Representing Instructions

### Machine Code

所有的操作都會被以二進制的方式表示給硬體，也就是所謂的機器碼（machine code），為了遵循簡單的原則，所有的 MIPS 指令長度皆為 32 位，機器指令會分成若干的字段（field）。

### MIPS R-format Instructions

<div style="text-align: center"><img src="https://i.imgur.com/e9t4aLr.png" width="600" /></div>

上述格式稱為 R 型，用於暫存器，其中 MIPS 指令中各字段的名稱與涵義如下：

- `op`: 指令的基本操作，通常稱為操作碼（opcode）
- `rs`: 第一個源操作數暫存器
- `rt`: 第二個源操作數暫存器
- `rd`: 用於存放操作結果的目的暫存器
- `shamt`: 位移量
- `funct`: 功能碼（function code），用於指明 `op` 字段中操作的特定變化

### Hexadecimal

十六位，每一位表示四個 bit：

<div style="text-align: center"><img src="https://i.imgur.com/8CkxJir.png" width="800" /></div>

比如 `eca8 6420` 表示 $1110 \, 1100 \, 1010 \, 1000 \, 0110 \, 0100 \, 0010 \, 0000$

### MIPS I-format Instructions

<div style="text-align: center"><img src="https://i.imgur.com/NRhxou0.png" width="800" /></div>

上述格式稱為 I 型，用於立即數與存取操作，其中 MIPS 指令中各字段的名稱與涵義如下：

- `op`: 指令的基本操作，通常稱為操作碼（opcode）
- `rs`: 第一個源操作數暫存器
- `rt`: 目標暫存器（對 `lw` 指令）或來源暫存器（對 `sw` 指令）
- `Constant`: 為 $-2^{15}$ 到 $2^{15} -1$ 之間的數
- `Address`: 需要加到 `rs` 基底位址的偏移量

### Stored Program Computers

<div style="text-align: center"><img src="https://i.imgur.com/cISPUff.png" width="300" /></div>

現代的計算機基於指令形式表示和記憶體讀寫操作的原則，引出了存儲程式（Stored Program）的概念。在記憶體中可以存放程式代碼、與之對應的編譯候機器碼、編譯後需要使用的文件，甚至是生成機器碼的編譯器…等，而處理器只需要進行操作即可。

## Logical Operations

### Logical Operatins in Programming Language

程式語言和指令集架構中，針對字段進行位元增添了一系列的邏輯操作：

|  Operation  |  C   | Java  |     MIPS      |
| :---------: | :--: | :---: | :-----------: |
| Shift left  | `<<` | `>>`  |     `sll`     |
| Shift right | `>>` | `>>>` |     `srl`     |
| Bitwise AND | `&`  |  `&`  | `and`, `andi` |
| Bitwise OR  | `|`  |  `|`  |  `or`, `ori`  |
| Bitwise NOT | `~`  |  `~`  |     `nor`     |

### Shift Operations

![](https://i.imgur.com/pgetqv2.png)

### AND Operations

![](https://i.imgur.com/woA7kQr.png)

### NOT Operations

![](https://i.imgur.com/qy5n8MJ.png)

### Conditional Operations

![](https://i.imgur.com/9fReTGT.png)

### Compiling If Statements

![](https://i.imgur.com/NRDeEbU.png)

### Compiling Loop Statements

![](https://i.imgur.com/t2baIch.png)

![](https://i.imgur.com/XcpzwU1.png)

![](https://i.imgur.com/CMyZ7eC.png)

![](https://i.imgur.com/aWjvETX.png)

![](https://i.imgur.com/vW18EeX.png)

![](https://i.imgur.com/3VPMoxl.png)

![](https://i.imgur.com/o0b6tFb.png)
