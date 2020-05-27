---
pageClass: udemy
---

# Subroutine

## Functions

當要實踐的功能越來越多時，程式也會越來越複雜，因此我們不可能將所有程式都寫在 `main()` 區塊中。為了更為有效率地進行程式的開發與管理，誕生了各式各樣的編成範式（Programming Paradigm），比如：物件導向程式設計、函數式程式設計、過程式程式設計…等。

其中，過程式程式設計（Procedural Programming）主要採取的方式是透過程式呼叫（procedure call）或函數呼叫（function call）的方式來進行流程控制。也就是將一個功能拆分放到各個子程式（subroutines）中，在程式執行的任何一個時間點，都可以呼叫特定的函數來完成任務。

在 C++ 中，我們可以將功能拆解並放入為一個個函數（function）中，比如下面的範例將原本放在 `main()` 區塊中的功能，拆解成了兩個函數 `showMenu()` 和 `processSelction()`：

```cpp
#include <iostream>
using namespace std;

void showMenu() {
  cout << "1. Search" << endl;
  cout << "2. View Record" << endl;
  cout << "3. Quit" << endl;
}

void processSelection() {
  cout << "Enter selection: " << endl;

  int input;
  cin >> input;

  switch (input) {
    case 1:
      cout << "Searching ..." << endl;
      break;
    case 2:
      cout << "Viewing ..." << endl;
      break;
    case 3:
      cout << "Quiting ..." << endl;
      break;
    default:
      cout << "Please select an item from the menu." << end;
  }
}

int main() {
  showMenu();
  processSelection();
  return 0;
}
```

注意：函數聲明必須在函數被呼叫之前完成，通常會先聲明函數，再於後方完成函數的定義。

## Return Values

函數可以將計算結果作為回傳值，換句話說，可以透過函數來對變數進行賦值，但在聲明時必須交待清楚回傳值的資料型態。

```cpp
#include <iostream>
using namespace std;

void showMenu() {
  cout << "1. Search" << endl;
  cout << "2. View Record" << endl;
  cout << "3. Quit" << endl;
}

int processSelection() {
  cout << "Enter selection: " << endl;

  int input;
  cin >> input;

  return input;
}

int main() {
  showMenu();
  int selection = processSelection();

  switch (selection) {
    case 1:
      cout << "Searching ..." << endl;
      break;
    case 2:
      cout << "Viewing ..." << endl;
      break;
    case 3:
      cout << "Quiting ..." << endl;
      break;
    default:
      cout << "Please select an item from the menu." << end;
  }

  return 0;
}
```

## Function Parameters

## Headers and Prototypes
