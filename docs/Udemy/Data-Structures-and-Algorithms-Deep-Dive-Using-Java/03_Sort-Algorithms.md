---
pageClass: udemy
---

# Sort Algorithms

## Stable vs Unstable Sort Algorithms

當排序的數組中存在有鍵值相同的資料，根據排序前後是否改變其紀錄的相對位置，可以將排序演算法分成穩定排序演算法（Stable Sorting Algorithms）和不穩定排序演算法（Unstable Sorting Algorithms）：

- 不穩定排序：選擇排序、快速排序、希爾排序、堆排序…
- 穩定排序：冒泡排序、插入排序、歸併排序和基數排序…

## Bubble Sort

### Theory

冒泡排序（Bubble Sort）會重複遍歷待排序的數列，一次比較兩個元素並進行交換，直到排序完成。

- 屬於原地置換（In-Place Algorithms），不需要額外的空間。
- 屬於穩定排序，排序前後相同鍵值元素不改變其相對位置。
- 最優時間複雜度 $O(n)$
- 平均時間複雜度 $O(n^2)$
- 最差時間複雜度 $O(n^2)$

### Implementation

```java
public class Main {

  public static void main(String[] args) {
    int[] intArray = {20, 35, -15, 7, 55, 1, -22};

    for (int lastUnsortedIndex = intArray.length - 1; lastUnsortedIndex > 0; lastUnsortedIndex--) {
      for (int i = 0; i < lastUnsortedIndex; i++) {
        if (intArray[i] > intArray[i + 1]) {
          swap(intArray, i, i + 1);
        }
      }
    }

    for (int i = 0; i < intArray.length; i++) {
      System.out.println(intArray[i]);
    }
  }

  public static void swap(int[] array, int i, int j) {
    if (i == j) {
      return;
    }

    int temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
```

## Selection Sort

### Theory

選擇排序（Selection Sort）會重複遍歷待排序的數列，找出最小值或最大值並挪至最前方，直到排序完成。

- 屬於原地置換（In-Place Algorithms），不需要額外的空間。
- 屬於不穩定排序，排序前後相同鍵值元素會改變其相對位置。
- 交換次數少於冒泡排序
- 最優時間複雜度 $O(n^2)$
- 平均時間複雜度 $O(n^2)$
- 最差時間複雜度 $O(n^2)$

### Implementation

```java
public class Main {

  public static void main(String[] args) {
    int[] intArray = {20, 35, -15, 7, 55, 1, -22};

    for (int lastUnsortedIndex = intArray.length - 1; lastUnsortedIndex > 0; lastUnsortedIndex--) {
      int largest = 0;

      for (int i = 1; i <= lastUnsortedIndex; i++) {
        if (intArray[i] > intArray[largest]) {
          largest = i;
        }
      }

      swap(intArray, largest, lastUnsortedIndex);
    }

    for (int i = 0; i < intArray.length; i++) {
      System.out.println(intArray[i]);
    }
  }

  public static void swap(int[] array, int i, int j) {
    if (i == j) {
      return;
    }

    int temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

```

## Insertion Sort

### Theory

插入排序（Insertion Sort）會從未排序的部份中逐一取出元素，並在已排序的部份中找到適當的位置插入，直到排序完成。

- 屬於原地置換（In-Place Algorithms），不需要額外的空間。
- 屬於穩定排序，排序前後相同鍵值元素不改變其相對位置。
- 最優時間複雜度 $O(n)$
- 平均時間複雜度 $O(n^2)$
- 最差時間複雜度 $O(n^2)$

### Implementation

```java
public class Main {

  public static void main(String[] args) {
    int[] intArray = {20, 35, -15, 7, 55, 1, -22};

    for (int firstUnsortedIndex = 1; firstUnsortedIndex < intArray.length; firstUnsortedIndex++) {
      int newElement = intArray[firstUnsortedIndex];

      int i;
      for (i = firstUnsortedIndex; i > 0 && intArray[i - 1] > newElement; i--) {
        intArray[i] = intArray[i - 1];
      }

      intArray[i] = newElement;
    }

    for (int i = 0 ;i < intArray.length; i++) {
      System.out.println(intArray[i]);
    }
  }
}
```

## Shell Sort

### Theory

希爾排序（Shell Sort），又稱遞減增量排序，

- 屬於插入排序的改進版本。
- 屬於不穩定排序，排序前後相同鍵值元素會改變其相對位置。
- 最優時間複雜度 $O(n\log{n})$，根據步長設定有所不同
- 平均時間複雜度，根據步長設定有所不同
- 最差時間複雜度 $O(n^2)$，根據步長設定有所不同

### Implementation

```java
public class Main {

  public static void main(String[] args) {
    int[] intArray = {20, 35, -15, 7, 55, 1, -22};

    for (int gap = intArray.length / 2; gap > 0; gap /= 2) {
      for (int i = gap; i < intArray.length; i++) {
        int newElement = intArray[i];

        int j = i;

        while (j >= gap && intArray[j - gap] > newElement) {
          intArray[j] = intArray[j - gap];
          j -= gap;
        }

        intArray[j] = newElement;
      }
    }

    for (int i = 0; i < intArray.length; i++) {
      System.out.println(intArray[i]);
    }
  }
}
```

## Recursion

## Merge Sort

### Theory

### Implementation

## Qucik Sort

### Theory

### Implementation

## Counting Sort

### Theory

### Implementation

## Radix Sort

### Theory

### Implementation

## Sorting Arrays Using the JDK

```java
import java.util.Arrays;

public class Main {

  public static void main(String[] args) {
    int[] intArray = {20, 35, -15, 7, 55, 1, -22};

    Arrays.sort(intArray);
    Arrays.parallelSort(intArray);

    for (int i = 0; i < intArray.length; i++) {
      System.out.println(intArray[i]);
    }
  }
}
```

## [Exercise]

### Question

### Solution

## [Exercise]

### Question

### Solution

## [Exercise]

### Question

### Solution