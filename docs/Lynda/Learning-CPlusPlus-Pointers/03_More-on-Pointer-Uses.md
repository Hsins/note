---
pageClass: lynda
---

# More on Pointer Uses

## Dynamic Memory Allocation

- Defines data requirements **at runtime**, rather than defining a predefined amount of memory.
- Makes program flexible to request only needed memory.
- Dynamic memory is identified by its address.
- Memory can also be released when it is not needed.
- Memory can be increased or decreased.
- Errors in code can cause memory leaks.
- You should watch out for memory fragmentation.

## Passing Pointers as Arguments

- There are two ways by which arguments are passed to functions: **pass by value** or **pass by reference**.
- When we are using pass by reference, we're actually passing a pointer. (function parameter is a pointer type)
- When we are using pass by value, the copies of those arguments are created and transfered to the function.
- When we are passing a pointer into a function that whatever changes are made in the function are also made in the original variable.

```cpp
#include "stdafx.h"
#include <iostream>

using namespace std;

double averageCost(double* priceArray, int* count) {
  double sum = 0;
  for (int i = 0; i < *count; i++) {
    sum += *(priceArray + 1);
  }
  double avg = sum / *count;
  *count += 5;
  cout << "In function count value" << *count << endl;
  return avg;
}

int main() {
  double prices[5] { 5.00, 4.50, 3.75, 3.10, 6.75 };
  int quantity = 5;
  double average = averageCost(prices, &quantity);
  cout << "$" << average << endl;
  cout << "quantity value: " << quantity << endl;

  return 0;
}
```

## Stack and Heap

- Memory in C++ is divided into two categories: **stack** and **heap**.
- Variables created at compile time are stored in the stack. The stack has a fixed size determined by the computer. When variable is no longer used, the stack is released.
- Function arguments and return locations are stored on the stack.
- Memory not used by the Operating System or programs is called the heap, sometimes referred to as the free store.
- Heap can be used for dynamic variable creation. We can use `new` operator to request the space. The `new` operator returns the address of the space.
- The complement operator of `new` is `delete` operator, which releases memory that we previously allocated.

## `new` and `delete` operators

- Arrays can take up a lot of space, so we can use `new` and `delete` operator to create and delete it on demand.

```cpp
#include "stdafx.h"
#include <iostream>

using namespace std;

int main() {
  int* pointer(new int(55));    // create a new integer variable that doesn't have a variable name
  cout << *pointer << endl;
  delete pointer;

  int* pArray(new int(5) { 10, 20, 30, 40, 50 });
  *(pArray + 1) += 5;
  cout << *pArray << ", " << *(pArray + 1) << endl;
  delete pArray;

  return 0;
}
```