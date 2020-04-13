---
pageClass: udemy
---

# Heaps

## Heap

### Theory

We can store heaps as arrays:

- We can store binary heaps as arrays
- We put the root at `array[0]`
- We then traverse each level from left to right, and so the left child of the root would go into `array[1]`, its right child would to into `array[2]`...

For the node at `array[i]`:

- Left Child = 2i + 1
- Right Child = 2i + 2
- Parent = floor((i-1) / 2)

### Implementation

```java
public class Heap {
    private int[] heap;
    private int size;

    public Heap(int capacity) {
        heap = new int[capacity];
    }

    public void insert(int value) {
        if (isfull()) {
            throw new IndexOutOfBoundsException("Heap is full");
        }

        heap[size++] = value;
        fixHeapAbove(size);
        size++;
    }

    private void fixHeapAbove(int index) {
        int newValue = heap[index];
        while (index > 0 && newValue > heap[getParent(index)]) {
            heap[index] = heap[getParent(index)];
            index = getParent(index);
        }

        heap[index] = newValue;
    }

    public boolean isFull() {
        return size == heap.length;
    }

    public int getParent(int index) {
        return (index - 1) / 2;
    }
}
```