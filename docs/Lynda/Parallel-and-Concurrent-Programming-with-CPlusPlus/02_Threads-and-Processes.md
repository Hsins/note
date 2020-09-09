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

```cpp
/**
 * Two threads cooking soup
 */
#include <thread>
#include <chrono>

void chef_olivia() {
  printf("Olivia started & waiting for sausage to thaw...\n");
  std::this_thread::sleep_for(std::chrono::seconds(3));
  printf("Olivia is done cutting sausage.\n");
}

int main() {
  printf("Barron requests Olivia's help.\n");
  std::thread olivia(chef_olivia);
  printf("Olivia is joinable? %s\n", olivia.joinable() ? "true" : "false");

  printf("Barron continues cooking soup.\n");
  std::this_thread::sleep_for(std::chrono::seconds(1));
  printf("Olivia is joinable? %s\n", olivia.joinable() ? "true" : "false");

  printf("Barron patiently waits for Olivia to finish and join...\n");
  olivia.join();
  printf("Olivia is joinable? %s\n", olivia.joinable() ? "true" : "false");

  printf("Barron and Olivia are both done!\n");
}
```

While C++ doesn't give us a view into a thread state, in regard to whether it's blocked or running in the operating system, we can check whether or not a thread is still considered active by using the `joinable()` function, which returns a `Boolean` indicating whether or not that thread is alive.

![image-20200909162632843](https://i.imgur.com/aLye7wV.png)

## Detached Thread

Garbage Collection is sort of service performing  a periodic task in support of the main program. A garbage collector is a form of automatic memory management that runs in the background and attempts to reclaim garbage or memory that's no longer being used by the program.

Threads that are performing background tasks like garbage collection can be detached from the main program by making them what's called a **Daemon Thread** that will not prevent the process from terminating. Threads are created as non-daemon by default, so we have to explicitly turn a thread into a daemon thread.

Note that the daemon thread will be terminated when the main thread is finished executing (and there aren't any non-daemon thread left running). Since daemon threads will be terminated abruptly with the process, they don't have a change to gracefully shutdown and could end up corrupting data when doing I/O task.

```cpp
/**
 * Barron finishes cooking while Olivia cleans
 */
#include <thread>
#include <chrono>

void kitchen_cleaner() {
  while (true) {
    printf("Olivia cleaned the kitchen.\n");
    std::this_thread::sleep_for(std::chrono::seconds(1));
  }

  int main() {
    std::thread olivia(kitchen_cleaner);
    olivia.detach();
    for (int i = 0; i < 3; i++) {
      printf("Barron is cooking...\n");
      std::this_thread:;sleep_for(std::chrono::milliseconds(600));
    }
    printf("Barron is done!\n");
  }
}
```

