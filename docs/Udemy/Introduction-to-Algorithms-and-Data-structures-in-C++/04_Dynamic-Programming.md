# Dynamic Programming

## Fibonacci Sequence

大自然中，有許多事物包藏了斐波那契數（Fibonacci Numbers）的結構，比如：松果的排列、等角螺線、黃金分割、花瓣數目…等。在數學中，斐波那契數列（Fibonacci Sequence）是以遞迴的方式來定義：

$$
F(n) =
\begin{cases}
    0                & n = 0 \\
    1                & n = 1 \\
    F(n-1) + F(n-2)  & n > 1
\end{cases}
$$

## Dynamic Programming

### Question

首先來看一個題目：

::: callout ❓ 數字表達方式
給定一個數字 $N$，有幾種方式可以將 $N$ 表示為數字 $1$ 和 $2$ 的和？其中 $1 + 2$ 和 $2 + 1$ 應視為不同的方式。
:::

### Solution: Enumeration

當 $N = 1$ 時：

$$
1 = 1
$$

當 $N = 2$ 時：

$$
\begin{aligned}
  2 &= 1 + 1 \\
  2 &= 2
\end{aligned}
$$

當 $N = 3$ 時：

$$
\begin{aligned}
  3 &= 1 + 1 + 1 \\
  3 &= 2 + 1 \\
  3 &= 1 + 2
\end{aligned}
$$

當 $N = 4$ 時：

$$
\begin{aligned}
  4 &= 1 + 1 + 1 + 1 \\
  4 &= 2 + 1 + 1 \\
  4 &= 1 + 2 + 1 \\
  4 &= 1 + 1 + 2 \\
  4 &= 2 + 2
\end{aligned}
$$

### Solution: Dynamic Programming

$$
\begin{aligned}
  \text{dp[N]} &= \text{Number of different ways to write the number N as the sum of 1 and 2} \\
               &= \text{dp[N-1]} + \text{dp[N-2]
\end{aligned}
$$


## [Lecture] How to Spot Recurrence Relations?

## [Lecture] 0/1 Knapsack Problem
