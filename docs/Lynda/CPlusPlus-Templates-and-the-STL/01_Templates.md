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

## Template Specialization

When you invoke a template with a specific type, the compiler creates a specialization for the template with that specific type. The specialization is invisible to the programmer and happens at compile time entirely behind the scenes. Specializations are both the blessing and the curse of templates.

They ensure that the templates are type safe. But this also imposes overhead, both the compile time and run time and the add the add size to the object file. In many cases the benefits will outweighs the cost and you find templates are widely used for generic programming especially in the STL.

## Template Variable

C++ 14 provides a new template implementation for strongly typed variables. Here we have a template variable. We have our normal template syntax followed by a variable of type `T`, and in this case we're defining `pi` to 20 places. Down here we're setting cout to use a precision of 20 places for our floating point variables.

```cpp
#include <iostream>

using namespace std;

template<typename T>
T pi = T(3.1415926535897932385L);

int main() {
  cout.precision(20);
  cout << pi<double> << endl;
  return 0;
}
```