---
pageClass: udemy
---

# Getting Started

## C++ Drawbacks

很多人在一開始並不會選擇 C++ 這個程式語言作為入門的語言，是因為它存在有一些缺點。比如說：

- 涉及了較為底層的概念如指針（pointer），相較其他語言來說並不容易學習
- 由於可以透過記憶體位置進行操作，如果不小心的話容易導致嚴重的錯誤，也因此開發所需時間較長
- 屬於編譯式語言，並不完全地跨平台

## Why Learn C++?

- 運行速度較快，能夠在短時間內完成許多任務
- 可以操作較為底層的硬體設備
- 可以促使開發者更深一層地了解電腦架構

## Common C++ Compilers

所謂的編譯器（Compiler）是別人所寫好的程式，可以將某種程式語言的源代碼轉換成另外一種語言。開發者只需要編寫高階語言如 C++ 的源代碼，再透過編譯器產生電腦可以解讀與執行的低階機器語言。目前常見的 C++ 編譯器有：

- GNU G++ / GCC
- MingGW
- Visual C++ Compiler

其他的編譯器可以參考 [C++ Compilers](https://www.wikiwand.com/en/List_of_compilers#/C++_compilers) 提供的列表。

## Integrated Development Environments

進行開發的過程中，除了編輯文本的功能之外，也經常需要對撰寫好的程式進行構建與除錯。為了提升開發的效率，經常會將編輯器、編譯器、除錯器、類別瀏覽器、物件結構圖 ⋯⋯ 等功能整合起來，也就是所謂的整合開發環境（IDE, Integrated Development Environment）。這些 IDE 有時候會支援不同程式語言，或者是針對特定的程式語言量身打造，常見的 C++ IDE 如下：

- Eclipse CDT
- Visual C++
- Code Blocks
- Emacs, Vim

## The First Program: Hello World

```cpp
#include <iosteam>

using namespace std;

int main() {
  cout << "Hello World!" << endl;
  return 0;
}
```

## Outputting Text

```cpp
#include <iostream>

using namespace std;

int main() {
  cout << "Starting Program..." << flush;
  cout << "This is some text." << endl
  cout << "Banana. " << "Apple. " << "Orange." << endl;
  cout << "This is some more text." << endl;

  return 0;
}
```

在 C++ 中替 `cout` 設計了緩衝區的概念，透過重載之後的 `<<` 運算符將資料先讀入記憶體的緩衝區中，直到緩衝區滿了才會清空緩衝區並把字串輸出到如 `stdout` 這類的輸出流。其中：

- `endl` 會將緩衝區的資料加上空行後進行輸出，並清除緩衝區內容
- `flush` 會將緩衝區的資料直接進行輸出，並清除緩衝區內容
