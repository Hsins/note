---
pageClass: udemy
---

# Arrays

## Arrays in Java

陣列（Array）是十分基礎且常見的資料結構，也是實做其他資料結構的基礎，因此有必要在最一開始先複習如何在 Java 中宣告與使用陣列：

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

注意：

- 陣列在 Java 中並不是動態資料結構，也就是說在創建物件實例之後就無法再改變他的大小，因此宣告陣列變數時必須給定他的大小。
- 陣列索引的起始值為 $0$，一個大小為 $\text{size}$ 的陣列，索引值範圍是 $0$ 到 $\text{size} - 1$。

## Arrays in Memory

陣列在記憶體中會佔用連續的空間，每一個陣列元素所佔據的空間大小是相同的。如果說陣列起始的記憶體空間為 $x$ 且每一個元素所佔據的空間大小為 $y$，則第 $i$ 個元素的記憶體位置可以表示為 $x + i \times y$。

![](https://user-images.githubusercontent.com/26391143/82906800-5948a580-9f98-11ea-8b8b-bf13cb4831bb.png)

以上圖為例，假設陣列起始位置為 $12$，每一個元素佔據 $4$ 個位元組（bytes），我們可以推算得知陣列中每個元素的記憶體位置：

- `array[0]` 的記憶體位置為 $12 + (0 \times 4) = 12$
- `array[1]` 的記憶體位置為 $12 + (1 \times 4) = 16$
- `array[2]` 的記憶體位置為 $12 + (2 \times 4) = 20$
- `array[3]` 的記憶體位置為 $12 + (3 \times 4) = 24$
- `array[4]` 的記憶體位置為 $12 + (4 \times 4) = 28$
- `array[5]` 的記憶體位置為 $12 + (5 \times 4) = 32$
- `array[6]` 的記憶體位置為 $12 + (6 \times 4) = 36$

由於元素的記憶體位置可以透過上述運算得到，所以不論元素位在陣列中的那一個位置，透過索引值來訪問陣列元素的時間都是相同的。因此我們會說陣列具有隨機存取（random access）的特性。
