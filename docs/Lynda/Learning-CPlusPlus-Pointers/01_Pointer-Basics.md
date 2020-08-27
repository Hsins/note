---
pageClass: lynda
---

# Pointer Basics

## Pointers Defined

- The memory location is called an **address**.
- Memory locations are numbered sequentially.
- Addresses are in hexdemical notation, e.g. `0x01AC4D`.
- Addresses change from execution to execution.
- A pointer is a variable that stores an address location.
- Pointer notation is faster when working with arrays.
- They provide functions access to large blocks of data.
- They can allocate memory dynamically.
- When a pointer is not initialized, it is set to `NULL`. (This sets the pointer to all zeroes)
- It's always a good idea to initialize a pointer.
- It's helpful to use a prefix of `p` for pointer vairable names.

## Address and Pointers

- Pointers actually is a data type that contains the address of another piece of data.
- We can use ampersand symbol `&` to obtain the address of any variable in C++.
- The address changes every time we execute the code.
- Having an asterisk `*` after the data type to define a pointer.
- We can't store the address of a double variable into an integer pointer.
- The asterisk `*` can be located either right after the data type or right before the name of the variable.

```cpp
#include "stdafx.h"
#include <iostream>
using namespace std;

int main() {
  int number = 240;   // Define an int variable
  int* numPtr;        // Define an integer pointer numPtr
  numPtr = &number;   // assign the address of number to numPtr
  cout << "The address of number is " << numPtr << endl;

  return 0
}
```

## Pointer Memory

- The amount of memory allocated for a variable depends on the data type of the variable.
  - `char`, `bool`: 1 bytes
  - `short`: 2 bytes
  - `int`, `long`, `float`: 4 bytes
  - `double`: 8 bytes
- The pointer holds the address of the data, so the address size is always only going to need 4 bytes.

```cpp
#include "stdafx.h"
#include <iostream>
using namespace std;

int main() {
  cout << "Size of boolean: " << sizeof(bool) << endl;        // 1
  cout << "Size of char: " << sizeof(char) << endl;           // 1
  cout << "Size of int: " << sizeof(int) << endl;             // 4
  cout << "Size of float: " << sizeof(float) << endl;         // 4
  cout << "Size of long: " << sizeof(long) << endl;           // 4
  cout << "Size of double: " << sizeof(double) << endl;       // 8

  bool* pBool;
  char* pChar;
  int* PInt;

  cout << "Size of boolean ptr: " << sizeof(pBool) << endl;   // 4
  cout << "Size of char ptr: " << sizeof(pChar) << endl;      // 4
  cout << "Size of int ptr: " << sizeof(pInt) << endl;        // 4

  return 0;
}
```