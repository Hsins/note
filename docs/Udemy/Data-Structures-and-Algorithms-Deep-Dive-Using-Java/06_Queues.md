---
pageClass: udemy
---

# Queues

## Queues

### Theory

- Abstract data type
- First in, first out (FIFO)
- Add: also called enqueue, add an item to the end of the queue
- remove: also called dequeue, remove the item at the front of the queue
- peek: get the item at the front of the queue, but don't remove it

### Implementation (Array)

```java
public static ArrayQueue{
    private Employee[] queue;
    private int front;
    private int back;

    public ArrayQueue(int capacity) {
        queue = new Employee[capacity];
    }

    public void add(Employee employee) {
        if (back == queue.length) {
            Employee[] newArray = new Employee[2 * queue.length];
            System.arraycopy(queue, 0, newArray, queue.length);
            queue = newArray;
        }

        queue[back] = employee;
        back++;
    }
}
```

## Queues and the JDK

## [Challenge] Queue