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

- 屬於原地置換（In-Place Algorithms）
- 複雜度 $O(n^2)$
- 穩定排序

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
        if (i == j) return;

        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
```

## Selection Sort

### Theory

- 屬於原地置換（In-Place Algorithms）
- 複雜度 $O(n^2)$
- 交換次數少於冒泡排序
- 不穩定排序

### Implementation

```java
public class Main {

    public static void main(String[] args) {
        int[] intArray = {20, 35, -15, 7, 55, 1, -22};

        for (int lastUnsortedIndex = intArray.length - 1; lastUnsortedIndex > 0; lastUnsortedIndex--) {
            int largest = 0;

            for (int i = 1; i <= lastUnsortedIndex; i++) {
                if (intArray[i] > intArray[largest]) largest = i;
            }

            swap(intArray, largest, lastUnsortedIndex);
        }

        for (int i = 0; i < intArray.length; i++) {
            System.out.println(intArray[i]);
        }
    }

    public static void swap(int[] array, int i, int j) {
        if (i == j) return;

        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
```

## Insertion Sort

### Theory

- In-Place Algorithm
- $O(n^2)$ Time Complexity
- Stable Algorithm

### Implementation

```java
public class Main {
    public static void main(String[] args) {
        int[] intArray = { 20, 35, -15, 7, 55, 1, -22, };

        for (int firstUnsortedIndex = 1; firstUnsortedIndex < intArray.length; firstUnsortedIndex++) {
            int newElement = intArray(firstUnsortedIndex);

            int i;
        }

    }
}
```

## Shell Sort

### Theory

### Implementation

## Recursion

## Merge Sort

## Qucik Sort

## Counting Sort

## Radix Sort
