# Variables and Memory

## Variables are Memory References

### The `id()` Function

- In Python, we can find out the memory address referenced by a variable by using the `id()` function.
- This will return a base-10 number. We can convert this base-10 number to hexademical by using the `hex()` function.

```python
my_var = 10
print(my_var)
print(id(my_var))
print(hex(id(my_var)))
```

## Reference Counting

### Finding th Reference Count

```python
import sys
sys.getrefcount(my_var)
```

Passing `my_var` to `getrefcount()` creates an extra reference!

```python
import ctypes
ctypes.c_long.from_address(address).value
```

Here, we just pass the memory adddress (an integer), not a reference. It doesn't affect reference count.

## Garbage Collection
