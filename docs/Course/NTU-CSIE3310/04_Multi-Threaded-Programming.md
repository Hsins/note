# Multi-Threaded Programming

## Threads

### Process and Thread

行程（Process）其實就是只有單一執行緒（single thread）的程式，又稱為重量級行程（WHP, heavyweight process），而執行緒也被稱為是輕量級行程（LWP, lightweight process）；在一個行程內部可以存在有多個執行緒，每個執行緒都是 CPU 的基本使用單元，是作業系統用來進行排程的重要單元，並且有自己的 Thread ID、Program Counter、Register Set 和 Stack Space。下圖是傳統單執行緒行程（single-threaded process）和多執行緒行程（multithreaded process）的比較示意圖：

![Single-threaded and Multithreaded processes](https://user-images.githubusercontent.com/26391143/91665735-6a222d80-eb2a-11ea-870b-91fe33b5da5c.png)

總地來說，使用多執行緒能夠帶來許多好處，包括較佳的反應速度（responsiveness）、資源共享（resource sharing）以及對多核心處理器來說有著更好的擴展性與使用性。目前有許多程式都使用了多執行緒的設計，比如：

- 網頁瀏覽器
- 文書處理軟體
- 網路應用伺服器

## Multicore Programming

## User-Level Threads and Kernel-Level Threads

## Kernel-Level Threads

## Multithreading Models

## Thread Libraries

## Pthreads

## Windows Threads

## Java

## Implicit Threading

## Threading Issues

## Scheduler Activations

## Windows

## Linux
