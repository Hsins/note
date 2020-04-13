---
pageClass: pluralsight
---

# Safely Using Arrays

## What is an Array?

### Array Examples

- Share Prices
- Images
- Building Blocks for implementing complex data structures.

### Array Properties

![image](https://user-images.githubusercontent.com/26391143/78952888-97cdf200-7b09-11ea-84ce-9aa9a890be28.png)

- Contiguous Memory Locations
- Excellent Performance when Storing Items in Arrays
- Direct
- Store Elements in same Type: Homogeneous Data Structures
- Offer fast direct element access using integer index. $O(1)$
- Indexes are zero-based

## C++ Built-In Arrays: Stacks vs Heap Allocation

- Stack: Means increasing the stack pointers. Fast Allocations, Limited Space
- Heap: Slower Allocations, Much more Room

```cpp
// Allocate Small Data on the Stack
// EX: X, Y, Z coordinates of a 3D vertex
float v[3];

// Allocate Large Data on the Heap
Pixel* imageData = new Pixel[30'000'000];
delete [] imageData;  // Release Memory

// In Production Code
vector<Pixel> imageData(30'000'000);
```

- `imageData` is a raw pointer to the first element of the array.
- Since the array elements are stored contiguously in memory, all the elements can be accessed starting from this base pointer.
- Note that the raw pointer doesn't know how many elements it's pointing to.
- The number of elements of such heap-allocated arrays needs to be stored separately somewhere. Or you would lose the size information.
- Moreover, don't forget once we are done with the array, we must release the heap-allocated memory using `delete` to prevent memory leaking.

## Starting a Basic Array Class Implementation

```cpp
class IntArray {
 private:
  int* m_ptr{nullptr};  // 陣列指針初始化為空指針
  int m_size{0};        // 陣列大小初始化為 0

 public:
  IntArray() = default;

  explicit IntArray(int size) {
    if (size != 0) {
      m_ptr = new int[size]{};
      m_size = size;
    }
  }

  int Size() const {
    return m_size;
  }

  bool IsEmpty() const {
    return (m_size == 0);
  }
}
```