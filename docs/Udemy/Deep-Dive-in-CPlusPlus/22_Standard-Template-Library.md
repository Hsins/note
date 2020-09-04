---
pageClass: udemy
---

## STL Containers Overviews

There are serveral container classes in STL. All of them are genetic template class and can work for any type of data:

- `std::vector`: Vectors are sequence containers representing arrays that can change in size. Support the method `push_back()`, `pop_back()`, `insert()`, `remove()`, `size()` and `empty()`.
- `std::list`: Lists are sequence containers that allow constant time insert and erase operations anywhere within the sequence, and iteration in both directions. Support the method `push_front`, `pop_front()`, `push_back()`, `pop_back()`, `insert()`, `remove()`, `size()`, `empty()`, `front()` and `back()`.
- `std::forward_list`: Forward lists are sequence containers that allow constant time insert and erase operations anywhere within the sequence.
- `std::deque`: deque is an irregular acronym of double-ended queue. Double-ended queues are sequence containers with dynamic sizes that can be expanded or contracted on both ends (either its front or its back).
- `std::priority_queue`: Priority queues are a type of container adaptors, specifically designed such that its first element is always the greatest of the elements it contains, according to some strict weak ordering criterion. Support the method `push()`, `pop()`, `empty()` and `size()`
- `std::stack`: Stacks are a type of container adaptor, specifically designed to operate in a LIFO context, where elements are inserted and extracted only from one end of the container. Support the method `push_back()`, `pop_back()`, `empty()` and `size()`
- `std::set`: Sets are containers that store unique elements following a specific order.
- `std::multiset`: Multisets are containers that store elements following a specific order, and where multiple elements can have equivalent values.

## STL Classes

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
  vector<int> v = { 2, 4, 6, 8, 10 };
  v.push_back(20);
  v.push_back(30);
  v.pop_back();

  // iterating vector use for-each loop
  for (int x:v) { cout << x << endl; }

  // iterating vector use iterator
  vector<int>::iterator itr;
  for (itr = v.begin(); itr != v.end(); itr++) { cout << *itr << endl; }
}
```

## Map Classes

```cpp
#include <iostream>
#include <map>
using namespace std;

int main() {
  map<int, string> m;
  m.insert(pair<int, string>(1, "John"));
  m.insert(pair<int, string>(2, "Mark"));
  m.insert(pair<int, string>(3, "Khan"));

  // iterating with iterator
  map<int, string>::iterator itr1;
  for (itr1 = m.begin(); itr1 != m.end(); itr1++) {
    cout << itr1->first << " " << itr1->second << endl;
  }

  // searching pair with key
  map<int, string>::iterator itr2;
  itr2 = m.find(2);
  cout << itr2->first << " " << itr2->second << endl;
}
```