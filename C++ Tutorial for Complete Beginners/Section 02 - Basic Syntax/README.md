# Section 02 - Basic Syntax

## Table of Contents

- [Section 02 - Basic Syntax](#section-02---basic-syntax)
  - [Table of Contents](#table-of-contents)
  - [[Lecture] Strings: Woring with Text](#lecture-strings-woring-with-text)
  - [[Lecture] User Input](#lecture-user-input)
  - [[Lecture] Binary Number and Computer Memory](#lecture-binary-number-and-computer-memory)
    - [Binary Number and Decmial Number](#binary-number-and-decmial-number)
    - [Computer Memory](#computer-memory)
  - [[Lecture] Integer Type](#lecture-integer-type)
    - [Library `limits`](#library-limits)
    - [`sizeof` Operator](#sizeof-operator)
  - [[Lecture] Floating Point Type](#lecture-floating-point-type)
    - [`Float` Type](#float-type)
    - [Library `iomanip`](#library-iomanip)
  - [[Lecture] Other Types: Char and Bool](#lecture-other-types-char-and-bool)
    - [Bool](#bool)
    - [Char](#char)
  - [[Lecture] If](#lecture-if)
  - [[Lecture] If-Else](#lecture-if-else)
  - [[Lecture] If-Else If-Else](#lecture-if-else-if-else)
  - [[Lecture] Comparing Floats](#lecture-comparing-floats)
  - [[Lecture] C++ Conditions](#lecture-c-conditions)
    - [Additional Conditions Operations](#additional-conditions-operations)
    - [`||` and `&&`](#and)
  - [[Lecture] While Loops](#lecture-while-loops)
  - [[Lecture] Do-While Loops](#lecture-do-while-loops)
  - [[Lecture] For Loops](#lecture-for-loops)
  - [[Lecture] Break and Continue](#lecture-break-and-continue)
  - [[Lecture] Arrays - List of Data](#lecture-arrays---list-of-data)
  - [[Lecture] Multidimensional Arrays](#lecture-multidimensional-arrays)
  - [[Lecture] Sizeof and Arrays](#lecture-sizeof-and-arrays)
  - [[Lecture] Sizeof and Multidimensional Arrays](#lecture-sizeof-and-multidimensional-arrays)
  - [[Lecture] Switch](#lecture-switch)

## [Lecture] Strings: Woring with Text

若要在 C++ 中進行文字的操作與處理，必須使用 **字串（string）** 資料型態。字串可以透過 `+` 操作符號進行串接：

```cpp
// Declare a string
string sentence1 = "This is a string";

// Concanate two string
string sentence2 = sentence1 + ", yeah.";
```

實際上，字串並不是一個標準的資料型態，本質上來說他是使用 `null` 字元 `\0` 作為結尾的字元陣列。也就是說，下面的宣告方式在 C 語言中的意義是相同的：

```cpp
char greeting[6] = {'H', 'e', 'l', 'l', 'o', '\0'};
char greeting[] = "Hello";
```

而在此處所使用的 `string` 其實是 **C++ 標準函數庫（STL）** 中所提供的一個類別型態，並且提供了額外的操作方式。因此，並不是所有的編譯器都預設引入，有時候必須在前面加上 `#include <string>` 來引入函數庫。

## [Lecture] User Input

在前面我們提到了 C++ 使用 I/O 函數庫 `iostream`，它提供了標準輸出方法 `cout`，並透過操作符號 `<<` 將右邊的內容放置到 **資料流（stream）** 中。若要獲取使用者輸入的資訊，則可以使用標準輸入方法 `cin`，並透過操作符號 `>>` 將右邊的內容存放於變數中：

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Enter your name: " << flush;
    string input;
    cin >> input;
    cout << "You Entered: " << input << endl;
    
    cout << "Enter a number: " << flush;
    int value;
    cin >> value;
    cout << "You Entered: " << value << endl;
    
    return 0;
}
```

## [Lecture] Binary Number and Computer Memory

### Binary Number and Decmial Number

在 **十進位數（decimal number）** 中，我們可以把一個數字看成是每一位數字去乘上對應的十的次方再加總：

$$
\begin{align*} 
372  &=  300 + 70 + 2 \\  
     &=  (3 \times 10^{2}) + (7 \times 10^{1}) + (2 \times 10^{0})
\end{align*}
$$

同樣的概念可以推廣到 **二進位數（binary number）** 中：

$$
\begin{align*} 
1011    &=  (1 \times 2^3) + (0 \times 2^2) + (1 \times 2^1) + (1 \times 2^0) \\ 
        &=  8 + 0 + 2 + 1 = 11
\end{align*}
$$

### Computer Memory

- 在電腦的記憶體中，最小的單位是 **位元（bit）**，用於表示 `0` 或 `1`。
- `8` 個位元可以組成 `1` 個 **字節(byte)**。

## [Lecture] Integer Type

### Library `limits`

在 C++ 中，存放數值的資料型態有其大小限制，如果存放了超過所能接受的大小，會造成 **溢位（overflow）** 的現象。引入 `limits` 函數庫，我們可以得知這些資料型態所能存放的最大最小值：

```cpp
#include <iostream>
#include <limits>
using namespace std;

int main() {
    cout << "Max int value: " << INT_MAX << endl;
    cout << "Min int value: " << INT_MIN << endl;
    
    return 0;
}
```

關於函數庫 `limits` 的使用，可以參考 [C++ Reference | limits](http://www.cplusplus.com/reference/climits/) 看更詳盡的說明。

### `sizeof` Operator

除此之外，我們可以透過 `sizeof` 操作符號來獲取資料型態實際上所使用的記憶體大小：

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Size of int: " << sizeof(int) << endl;
    cout << "Size of shot int: " << sizeof(short int) << endl;

return 0;
}
```

## [Lecture] Floating Point Type

### `Float` Type

現實生活中的數值不可能只僅限於整數，如果要使用小數，則必須使用 **浮點數（floating point）** 型態 `float`：

```cpp
#include <iostream>
using namespace std;

int main() {
    float fValue = 76.4;
    cout << fValue << endl;
    
    return 0;
}
```

### Library `iomanip`

常見的 I/O 格式操作符號比如 `endl`，而函數庫 `iomanip` 提供了 `cin` 和 `cout` 更多的操作運算符號，使得輸出時可以使用指定參數來進行格式化輸出。

```cpp
#include <iostream>
#include <iomanip>

int main() {
    float fValue = 76.4;
    
    // 以正常的數字格式顯示
    cout << fixed << fValue << endl;
    // 以科學記號表示 
    cout << scientific << fValue << endl;
    // 指定顯示精確度
    cout << setprecision(20) << fValue << endl;
    
    doble dValue = 76.4;
    cout << setprecision(20) << dValue << endl;
    
    return 0;
}
```

在上面的輸出過程中，如果採用 `fixed` 時結果可能為 `76.400002` 比起實際的數值多了 `0.00002`，這是因為在儲存浮點數時只能夠儲存一定的資訊。影片中舉例得到的 `sizeof(float)` 為 `4` 表示 `float` 型態最多只能夠儲存四個位元組的資訊，若要儲存更為精確的數字則必須採用其他的資料型態比如 `double` 和 `long double`。

關於函數庫 `iomanip` 的使用，可以參考 [C++ Reference | iomanip](http://www.cplusplus.com/reference/iomanip/) 看更詳盡的說明。

## [Lecture] Other Types: Char and Bool

### Bool

布林代數經常用以表示邏輯上的對或錯，在 C++ 中，布林代數可以為 `true` 或 `false`。也可以由數字表示，其中：

- `false` 使用數字 `0` 表示
- `true` 為任何非 `0` 的數

### Char

在 C++ 中，字元型態佔用一個 **位元組（byte）** 的空間，儲存的數字分別根據 **ASCII 字集（ASCII）** 對應到不同的符號，比如 `char 55` 實際上是表示字元 `7`：

```cpp
#include <iostream>
using namespace std;

int main() {
    char cValue1 = 55;
    cout << cValue1 << endl;        // 7
    
    char cValue2 = '7';
    cout << cValue2 << endl;        // 7
    cout << (int)cValue2 << endl;   // 55
    
    return 0;
}
```

關於 ASCII 字集對應的表，可以參考 [ASCII Table and Description](https://zh.wikipedia.org/wiki/ASCII) 看更詳盡的說明。由於對應關係太多無法直接記憶，我們在使用字元時很少使用數字，而是將字元放在兩個單引號中，比如：`'7'`。若要使用 [Unicode 編碼](https://unicode-table.com/en/) 則可以使用寬字元型態 `wchar_t`。

## [Lecture] If

在許多狀況中，我們必須進行條件的判斷（實際上這也是程式能夠完成許多功能的一個重要的特徵），這個時候則需要使用到 `if` 判斷式。一個 `if` 判斷式的結構大致上如下所示：

```cpp
if (condition) {
    statement;
}
```

在這個結構中以 `if` 關鍵字開始，括號中的 `condition` 必須放置可以進行布林邏輯運算的條件，若條件運算結果為真，則會執行後方大括號中的陳述 `statement`。

## [Lecture] If-Else

配合 `else` 關鍵字可以擴充 `if` 判斷式。一個 `if-else` 判斷式的結構大致上如下所示：

```cpp
if (condition) {
    statement1;
}
else {
    statement2;
}
```

在這個結構中以 `if` 關鍵字開始，括號中的 `condition` 必須放置可以進行布林邏輯運算的條件，若條件運算結果為真，則會執行後方大括號中的陳述 `statement1`；若條件運算結果為假，則會執行 `else` 後方大括號中的陳述 `statement2`。

## [Lecture] If-Else If-Else

除此之外還可以使用 `else if` 來擴充 `if` 判斷式。一個完整的 `if-else if-else` 判斷式的結構大致上如下所示：

```cpp
if (condition1) {
    statement1;
}
else if (condition2) {
    statement2;
}
else {
    statement3;
}
```

條件判斷會 **順序** 進行，以上述的結構來說，會以 `if` 關鍵字開始，括號中的 `condition1` 必須放置可以進行布林邏輯運算的條件，若條件運算結果為真，則會執行後方大括號中的陳述 `statement1`；若條件運算結果為假，則執行第二個條件 `condition2` 的判斷，條件運算結果為真，則會執行後方大括號中的陳述 `statement2`，若所有條件都不符合，則執行 `else` 後方大括號中的陳述 `statement3`。

## [Lecture] Comparing Floats

在條件判斷式中，如果要對浮點數或浮點數的四則運算結果進行判斷，必須非常小心。比如說下面這段程式碼在不同的電腦上可能會有不同的輸出結果：

```cpp
#include <iostream>
using namespace std;

int main() {
    float value = 1.1;
    
    if (value == 1.1) {
        cout << "equals" << endl;
    }
    else {
        cout << "not equal" << endl;
    }
    
    return 0;
}
```

如同前面所提到的，在儲存浮點數時不一定能夠存取到足夠的精確度（或者說實際上是不可能取到）。因此若要進行兩個浮點數之間是否相等的判斷是不切實際的，考慮實際狀況應該以兩者的差值在一定的誤差範圍內為判斷準則。

## [Lecture] C++ Conditions

### Additional Conditions Operations

若要進行條件判斷，有這些操作符可以使用：

- `==` 等於
- `!=` 不等於
- `<` 小於
- `<=` 小於等於
- `>` 大於
- `>=` 大於等於

### `||` and `&&`

條件可以進行邏輯運算，常見的邏輯運算為「或」和「且」：

- `||` 表示「或」，條件有一個成立即可
- `&&` 表示「且」，所有條件必須都成立才為真

## [Lecture] While Loops

## [Lecture] Do-While Loops

## [Lecture] For Loops

## [Lecture] Break and Continue

## [Lecture] Arrays - List of Data

**陣列（array）** 是一種可以存放多個數值的資料型態，陣列中存放的每一個數值稱為陣列的 **元素（element）**。陣列的宣告時必須先告知儲存元素的資料型態，以及陣列名稱與陣列大小，常見的宣告方式如下：

```cpp
// 宣告一個大小為 3 的整數陣列，但沒有賦值
int values[3];
// 宣告一個大小為 4 的浮點數陣列，並賦值
double numbers[4] = {4.5, 2.3, 7.2, 8.1};
// 宣告一個大小為 8 的整數陣列，並初始化所有值為 0
int numberArray[8] = {};
```

- 若要訪問元素時，必須透過索引值來進行存取。在 C++ 中，索引的起始值是 `0`。

## [Lecture] Multidimensional Arrays

## [Lecture] Sizeof and Arrays

## [Lecture] Sizeof and Multidimensional Arrays

## [Lecture] Switch
