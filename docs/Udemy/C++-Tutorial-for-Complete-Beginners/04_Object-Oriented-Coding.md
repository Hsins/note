# Object Oriented Coding

## [Lecture] Classes

**類別（Class）** 是物件導向程式設計的基礎，暫且先將他想像成是我們可以自定義的資料型態，他有著自己的資料和函數。在這一小節我們將創建一個 `Cat` 類別：

```cpp
// Name: Cat.h
#ifndef CLASSES_CAT_H
#define CLASSES_CAT_H

class Cat {
public:
    void speak();
    void jump();
};

#endif //CLASSES_CAT_H
```

```cpp
// Name: Cat.cpp
#include <iostream>
#include "Cat.h"

using namespace std;

void Cat::speak() {
    cout << "Meow!" << endl;
}

void Cat::jump() {
    cout << "Jumping to top of bookcase" << endl;
}
```

```cpp
// Name: Classes.cpp
#include <iostream>
#include "Cat.h"

using namespace std;

int main() {
    Cat cat1;

    cat1.speak();
    cat1.jump();

    return 0;
}
```

## [Lecture] Data Members

## [Lecture] C++ Constructors and Destructors

## [Lecture] C++ Getters and Setters

## [Lecture] C++ String Streams

## [Lecture] Overloading Constructors

## [Lecture] The "this" Keyword

## [Lecture] Constructor Initialization Lists
