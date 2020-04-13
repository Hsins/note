---
pageClass: udemy
---

# Arrays

## Arrays in Java

```java
public class Main {
    public static void main(String[] args) {
        int[] intArray = new int[7];

        intArray[0] = 20;
        intArray[1] = 35;
        intArray[2] = -15;
        intArray[3] = 7;
        intArray[4] = 55;
        intArray[5] = 1;
        intArray[6] = -22;

        for (int i = 0; i < intArray.length; i++) {
            System.out.println(intArray[i]);
        }
    }
}
```

- Arrays are not a dynamic data structure in Java. Once we created an array instance, we can't change it's size.

## Arrays in Memory

![](https://user-images.githubusercontent.com/26391143/74054886-d5cf6c80-4a19-11ea-8337-dd2e139486e3.png)

- Contiguous block in memory.
- Every element occupies the same amount of space in memory.
- If an array starts at memory address `x`, and the size of each element in the array is `y`. We can calculate the memory address of the i-th element by using the following expression: x + i*y
- If we know the index of an element, the time to retrieve the element will be the same, no matter where it is in the array.