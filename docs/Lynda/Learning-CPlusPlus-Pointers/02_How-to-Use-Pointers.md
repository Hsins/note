---
pageClass: lynda
---

# How to Use Pointers

## Pointers to Arrays

- When an array is created, the array name automatically contains the address of the first element in the array.
- Since the array name contains an address, we can use this value to initialize a pointer.
- We don't have to use the address of operator `&` in front of the variable name of array to get that address.
- Althought an array name represents an address, it's technically not a pointer.
- We can use the pointers to get all the values in an array using pointer arithmetic.

```cpp
#include "stdafx.h"
#include <iostream>

using namespace std;

int main() {
  double values[10];        // declare an array values with 10 elements
  double* pValue = values;  // define a pointer to the array
  cout << "value array address: " << values << endl;
  cout << "pValues: " << pValue << endl;

  int numbers[10];
  int* pNumbers = numbers;
  for (int i = 0; i < 10; i++) {
    cout << "Numbers address " << i << ": " << pNumbers + i << endl;
  }

  return 0;
}
```

## Character Pointers

- The character pointer is used to point to a string literal, since strings are really a sequence of individual characters.
- When we try to print the address using a character pointer, we'll probably get some unprintable characters.
- If we want to get the address of a single character, we actually have to use what's called **casting**.
- We use single quotes `'` around the P that indicates a character rathern than a string.
- When the character pointer is used to point to the start of a string literal, it assigns the starting address as the first character in that string literal which is an array.
- Since strings are **immutable**, it's a good programming practice to create the pointer as a constant pointer using the key word `constant`.
- By assigning the pointer as a constant, it syncs the constant string literal with the constant pointer.
- To output a string defined using a character pointer, simply use the pointer name. We don't need to use the dereference symbol `*`.

```cpp
#include "stdafx.h"
#include <iostream>

using namespace std;

int main() {
  // Character Pointer and Casting
  char initial = 'P';
  char* pInitial = &initial;
  cout << "Memory address for initial P: " << pInitial << endl;
  cout << "Memory address for initial P: " << (void *) pInitial << endl;              // Casting Method 1
  cout << "Memory address for initial P: " << static_cast <void *>(pInitial) << endl; // Casting Method 2

  // Create the Character Pointer as a Constant Pointer
  const char* pans1{ "Absolutely Yes" };
  const char* pans2{ "Absolutely Yes" };
  const char* pans3{ "Absolutely Yes" };
  const char* pans4{ "Absolutely Yes" };
  const char* pans5{ "Absolutely Yes" };
  const char* pans6{ "Absolutely Yes" };
  const char* pans7{ "Absolutely Yes" };
  const char* pans8{ "Absolutely Yes" };
  const char* pans{ "Absolutely Yes" };
  int choices{};
}
```

## Dereferencing the Pointers

- When we use the asterisk symbol `*` prior to the pointer name, it allows us access to the contents of the memory location to which it points.
- The asterisk symble prior to the pointer name is so-called **Deference Pointer** or **Indirection Pointer**.
- The deference pointer can be used with any of our numeric pointers excepts the character pointer.
- When we're using a character pointer, we have to actually cast the value if we want to get at the data.

```cpp
#include "stdafx.h"
#include <iostream>

using namespace std;

int main() {
  double testScores[5], sum = 0;
  double* pTestScores;
  pTestScores = testScores;

  for (int i = 0; i < 5; i++) {
    cout << "Enter the test score: " << endl;
    cin >> *(pTestScores + i);
    sum += *(pTestScores + i);
  }
  cout << "testScores: " << testScores << endl;
  cout << "Total for all students: " << sum << endl;
  cout << "Average Score: " << sum / 5 << endl;

  return 0;
}
```

## Pointing to a Pointer

- Besides having a pointer that points to a number or a character, pointers can point to other pointers.
- A commonly used example for this type of arrangement is **using an arroy of pointers**. (Since the array name points to the elements in array, then each element can contain a pointer to the data)

```cpp
#include "stdafx.h"
#include <iostream>

using namespace std;

int main() {
  // Pointing to Pointer
  int num = 10;
  int* pNum = &num;
  int** p2Num = &pNum;

  cout << "Address of num: " << &num << endl;
  cout << "Address stored in pNum: " << pNum << endl;
  cout << "Address of pNum: " << &pNum << endl;
  cout << "Address stored in p2Num: " << p2Num << endl;

  // Array of Pointers
  int testScores[5] {100, 95, 99, 85, 83};
  int* pointerArray[5];
  for (int i = 0; i < 5; i++) {
    pointerArray[i] = &(testScores[i]);
    cout << pointerArray[i] << endl;
    cout << *(pointerArray[i]) << endl;   // 100, 95, 99, 85, 83
    cout << *(pointerArray + i) << endl;
    cout << **(pointerArray + i) << endl; // 100, 95, 99, 85, 83

  }
  return 0;
}
```