---
pageClass: lynda
---

# Threads and Processes

## Thread v.s Process

```cpp
/**
 * Threads that waste CPU cycles
 */
#include <thread>
#include <chrono>
#include <unistd.h>

// a simple function that waste CPU cycles "forever"
void cpu_waster() {
  printf("CPU Waster Process ID: %d\n", getpid());
  printf("CPU Waster Thread ID: %d\n", std::this_thread::get_id());
  while (true) continue;
}

int main() {
  printf("Main Process ID: %d\n", getpid());
  printf("Main Thread ID: %d\n", std::this_thread::get_id());
  std::thread thread1(cpu_waster);
  std::thread thread1(cpu_waster);

  // keep the main thread alive "forever"
  while (true) {
    std::this_thread::sleep_for(std::chrono::seconds(1));
  }
}
```

## Concurrent v.s Parallel Execution

![image-20200909140806749](https://i.imgur.com/emmNUvR.png)
![image-20200909141219713](https://i.imgur.com/I8QNmom.png)

A program is structured to have multiple threads or processes doesn't mean they'll necessarily executed in parallel.

- **Concurrency** (DEALING with multiple things at once): Ability of a program to be broken into parts that can be executed out of order or partially out of order without affecting the end result. Concurrency is about how a program is structured and the composition of independently executing processes.
- **Parallelism** (DOING multiple things at once): Means to execute programs in same time. Note that to actually execute in parallel, we need parallel hardware. The parallel hardware can come in a variety of forms such as Multi-Core Processors, Graphics Processing Unit and Computer Cluster.

Concurrency enables a program to execute in parallel by given the necessary hardware, but a concurrent program is not inherently parallel. Besides, programs may not always benefit from parallel execution. Concurrent programming is useful for I/O dependent tasks like GUI; Parallel processing becomes useful for computationally-intensive tasks such as calculating the result of multiplying two matrices together.

## Execution Scheduling

```cpp
/**
 * Two threads chopping vegetables
 */
#include <thread>
#include <chrono>

bool chopping = true;

void vegetable_chopper(const char* name) {
  unsigned int vegetable_count = 0;
  while (chopping) { vegetable_count++; }
  printf("%s chopped %u vegetables.\n", name, vegetable_count);
}

int main() {
  std::thread olivia(vegetable_chopper, "Olivia");
  std::thread barron(vegetable_chopper, "Barron");

  printf("Barron and Olivia are chopping vegetables...\n");
  std::this_thread::sleep_for(std::chrono::seconds(1));
  chopping = false;
  barron.join();
  olivia.join();
}
```

From the result of the program above, we can know that:

- Scheduling is not always fair!
- Scheduling is not consistent!

So our program should not rely on execution scheduling for correctness.



## Thread Life Cycle



## Detached Thread