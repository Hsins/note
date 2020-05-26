---
pageClass: udemy
---

# Search Algorithms

## Linear Search Algorithm

```java
public class Main {
    public static void main(String[] args) {
        int[] inArray = { 20, 35, -15, 7, 55, -1, -22 };

        System.out.println(linearSearch(intArray, -15));
        System.out.println(linearSearch(intArray, 888));
    }

    public static int linearSearch(int[] input, int value) {
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

- Data must be sorted.

### Implementation (Iterative)

```java
public class Main {
    public static void main(String[] args) {
        int[] inArray = { -22, -15, -1, 7, 20, 35, 55 };

        System.out.println(BinarySearch(intArray, -15));
        System.out.println(BinarySearch(intArray, 888));
    }

    public static int BinarySearch(int[] input, int value) {
        int start = 0;
        int end = input.length;

        while (start < end) {
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
        int[] inArray = { -22, -15, -1, 7, 20, 35, 55 };

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