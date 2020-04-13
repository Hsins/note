# Getting Started

## [Note] Development Tool Codeblocks

在這一門課中，講師所使用的集成開發環境是開源的 [CodeBlocks](http://www.codeblocks.org/)。作業系統為 Microsoft Windows 的用戶記得在下載時選擇 `codeblocks-1x.xxmingw-setup.exe` 版本，他包含了編譯器與調試器。

## [Note] `ifstream` and `ofstream`

程式競賽中經常要將資料進行讀入與寫入的動作，方式如下：

```cpp
#include <iostream>
#include <bits/stdc++.h>
using namespace std;

ifstream inputStream("data.in");      // 讀入檔案 'data.in' 放入輸入流 ifstream
ofstream outputStream("data.out");     // 寫入檔案 'data.out' 源自輸出流 ofstream

int main() {
  int a, b, sum;

  inputStream >> a >> b;
  sum = a + b;

  outputStream << sum;

  return 0;
}
```
