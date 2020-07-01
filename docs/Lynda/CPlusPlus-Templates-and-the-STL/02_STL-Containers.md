---
pageClass: lynda
---

# STL Containers

## Vector

The vector is one of the most common STL containers. Vector is a sequence container and it holds objects in a strict sequencial order.

```cpp
#include <iostream>
#include <vector>
#include <string>

using namespace std;

// MARK: - utility functions

// print the elements of the vector
template<typename T>
void printv(vector<T> & v) {
  if (v.empty()) return;
  for (T &i : v) cout << i << " ";
  cout << endl;
}

// print a simple message
void message(const char *s) { cout << s << endl; }
void message(const char *s, const int n) { cout << s << ": " << n << endl; }

// MARK: - main
int main() {
  cout << "vector from initializer list: " << endl;
  vector<int> v1 = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
  printv(v1);

  // info
  message("size", (int) v1.size());
  message("front", v1.front());
  message("back", v1.back());

  // index
  message("element at 5", v1[5]);
  message("element at 5", v1.at(5));

  // insert
  message("insert 42 at being + 5:");
  v1.insert(v1.begin() + 5, 42);
  printv(v1);

  // erase
  message("erase at begin +5:");
  v1.erase(v1.begin() + 5);
  printv(v1);

  // push_back
  message("push back 47:");
  v1.push_back(47);
  printv(v1);

  // pop_back
  message("pop_back:");
  
}
```

## List

## Pair and Tuple

## Array

## Deque

## Queue

## Stack

## Set

## Maps