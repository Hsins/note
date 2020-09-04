---
pageClass: udemy
---

## Pointers

Pointer is a variable which is used for storing the address of data. Base on this, we can categorize variables of two types:

1. data variable: storing data, we can use `&` operator to get its address
2. address variable: storing address, we can use `*` operator to get its value

```cpp
#include <iostream>
using namespace std;

int main() {
  int var = 10;
  int* pVar = &var;

  cout << var << endl;    // value of var
  cout << &var << endl;   // address of var
  cout << pVar << endl;   // address of var
  cout << &pVar << endl;  // address of pVar
  cout << *pVar << endl;  // value of var

  return 0;
}
```

## Why Use Pointers?

The memory is divided into three sections as we know:

- Heap Section: program can access heap only using pointers indirectly.
- Stack Section: can be accessed by the main function in code section.
- Code Section: where the `main()` function is, the main function can access the same code section or the stack section but cannot access the heap section.

Suppose we have a pointer and that pointer can have the address of some memory in the heap, so that pointer will help the main function of the program to access the heap section.

Note that the use of pointer is for accessing the heap area / outside files and connecting to the network.

## Heap Memory Allocation (Dynamic Allocation)

Memory is allocated dynmically the size of the memory required in the heap is decided at run time instead of compile time. When we use `new` keyword, we're getting the memory in heap area, then we need to store that address in a pointer.

Moreover, the stack memory will automatically get deleted but the heap memory will not be getting deleted. The heap memory will be there as well as our program is running. It's very important to dealocate the heap memory. Otherwise if we're not delete it then it's called as Memory Leak Problem.

```cpp
#include <iostream>
using namespace std;

int main() {
  // create a array in the heap area
  int *p = new int[5];
  p[0] = 12;
  p[1] = 13;

  // dealocate the heap memory after use
  cout << p[1] << endl;
  delete []p;
  p = nullptr;

  return 0;
}
```