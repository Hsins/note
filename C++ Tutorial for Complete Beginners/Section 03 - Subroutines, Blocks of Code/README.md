# Section 03 - Subroutines: Blocks of Code

## Table of Contents

- [Functions](#functions)
- [Return Values](#return-values)
- [Function Parameters](#function-parameters)
- [Headers and Prototypes](#headers-and-prototypes)

## Functions

我們不可能將所有的程式碼全都放置在 `main()` 區塊中，當內容越多會使結構更為複雜。對於函數式編程的思路來說，將功能拆解為一個個 **函數（functions）** 使得程式可以 **模組化（modulize）** 是很常見且有效的做法。

下面的範例中，將原本放在 `main()` 區塊中的功能，拆解成了兩個函數 `showMenu()` 和 `processSelction()`：

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

- 函數聲明必須放置在函數被呼叫之前，或者先聲明函數體，再於後方完整建構函數內容。

## Return Values

函數在宣告時同時也告知了 **回傳值（return value）** 的資料型態，因此也可以透過函數來對變數進行賦值。在這裡改寫了前面的程式，使得函數 `processSelection()` 回傳用戶輸入的整數值：

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
