---
pageClass: lynda
---

# Templates

## What is a Template?

A template is essentially a compiler abstraction that allows you to write generic code that applies to various types or classes without concern for the details of the type.

```cpp
#include <iostream>
#include <string>

using namespace std;

template <typename T>
T maxof (const T & a, const T & b) {
  return (a > b ? a : b);
}

int main() {
  int a = 7;
  int b = 9;

  cout << "max is " << maxof<int>(a, b) << endl;
  return 0;
}
```

## Template Syntax

```cpp
template <typename T>
T maxof (const T & a, const T & b) {
  return (a > b ? a : b);
}
```