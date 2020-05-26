---
pageClass: udemy
---

# Arrays

## Arrays in Java

```java
public class Main {
    public static void main(String[] args) {
        // Create an integer array. (Must specify the size!)
        int[] intArray = new int[7];

        // Assign values to array by index. Note that the index starts from 0.
        intArray[0] = 20;
        intArray[1] = 35;
        intArray[2] = -15;
        intArray[3] = 7;
        intArray[4] = 55;
        intArray[5] = 1;
        intArray[6] = -22;

        // Print the array.
        for (int i = 0; i < intArray.length; i++) {
            System.out.println(intArray[i]);
        }
    }
}
```

陣列在 Java 中並不是動態資料結構，也就是說在創建物件實例之後就無法再改變他的大小，因此宣告陣列變數時必須給定他的大小。

## Arrays in Memory

![](https://user-images.githubusercontent.com/26391143/74054886-d5cf6c80-4a19-11ea-8337-dd2e139486e3.png)

陣列在記憶體中會佔用連續的空間，每一個陣列元素所佔據的空間大小是相同的。如果說陣列起始的記憶體空間為 $x$ 且每一個元素所佔據的空間大小為 $y$，則第 $i$ 個元素的記憶體位置可以表示為：

$$x + i \times y$$

也就是說，不論元素位在陣列中的那一個位置，透過索引值來訪問陣列元素的時間都是相同的。
