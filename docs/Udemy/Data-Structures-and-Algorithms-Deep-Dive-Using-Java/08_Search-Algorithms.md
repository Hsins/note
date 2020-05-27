---
pageClass: udemy
---

# Search Algorithms

## Linear Search Algorithm

### Theory

線性搜索演算法（Linear Search Algorithm）的概念十分直觀，就是逐個元素進行訪問與比對。

- 平均時間複雜度：$O(n)$
- 最優時間複雜度：$O(1)$
- 最差時間複雜度：$O(n)$

### Implementation

```java
public class Main {

  public static void main(String[] args) {
    int[] intArray = {20, 35, -15, 7, 55, -1, -22};

    System.out.println(linearSearch(intArray, -15));
    System.out.println(linearSearch(intArray, 888));
  }

  public static int linearSearch(int[] input, int value) {
    // check the elements one by one
    for (int i = 0; i < input.length; i++) {
      if (input[i] == value) {
        return i;
      }
    }

    return -1;
  }
}
```

## Binary Search Algorithm

### Theory

二分搜索演算法（Binary Search Algorithm）只能作用於已排序的資料，每次都與當前區間的中間位置進行比較來決定下一個搜索區間，直到訪問完畢或找到結果。

- 平均時間複雜度：$O(\log{n})$
- 最優時間複雜度：$O(1)$
- 最差時間複雜度：$O(\log{n})$

### Implementation (Iterative)

```java
public class Main {

  public static void main(String[] args) {
    int[] intArray = {-22, -15, -1, 7, 20, 35, 55};

    System.out.println(BinarySearch(intArray, -15));
    System.out.println(BinarySearch(intArray, 888));
  }

  public static int BinarySearch(int[] input, int value) {
    int start = 0;
    int end = input.length;

    while (start < end) {
      // calcuate the index of middle point
      int midpoint = (start + end) / 2;

      if (input[midpoint] == value) {
        return midpoint;
      } else if (input[midpoint] < value) {
        start = midpoint + 1;
      } else {
        end = midpoint;
      }
    }

    return -1;
  }
}
```

### Implementation (Recursive)

```java
public class Main {

  public static void main(String[] args) {
    int[] intArray = {-22, -15, -1, 7, 20, 35, 55};

    System.out.println(BinarySearch(intArray, -15));
    System.out.println(BinarySearch(intArray, 888));
  }

  public static int BinarySearch(int[] input, int value) {
    return BinarySearch(input, 0, input.length, value);
  }

  public static int BinarySearch(int[] input, int start, int end, int value) {
    if (start >= end) {
      return -1;
    }

    int midpoint = (start + end) / 2;
    if (input[midpoint] < value) {
      return BinarySearch(input, midpoint + 1, end, value);
    } else {
      return BinarySearch(input, start, midpoint, value);
    }
  }
}

```