# Section 02 - Setup and First Steps

## Which Version of Java?

自 2017 年起 Oracle 改變了發布 Java 和 JDK 更新的方式，在未來的八年內都將長期支持 Java 11，而 2019 年三月發布的 Java 12 將會每隔六個月就更新一次。鑒於大多數企業項目較為擁腫，並不會快速升級，因此建議採用 Java SE 11 (LTS) 版本。

詳細的內容可以參考 [Java 11 has Arrived. Is it time to panic?](https://learnprogramming.academy/programming/java-11-has-arrived-is-it-time-to-panic/)。

## Setup Java and Intellij IDEA

根據作業系統到 [Java SE Downloads](https://www.oracle.com/technetwork/java/javase/downloads/index.html) 頁面下載安裝檔。

### Windows

### MacOS

### Linux

```bash
$ tar -xvf jdk-11_linux-x64_bin.tar.gz
$ sudo mkdir -p /usr/lib/jvm/jdk-11
$ sudo mv jdk-11/* /usr/lib/jvm/jdk-11
$ sudo update-alternatives --install "/usr/bin/java" "java" "/usr/lib/jvm/jdk-11/bin/java" 1010
$ sudo update-alternatives --install "/usr/bin/javac" "javac" "/usr/lib/jvm/jdk-11/bin/javac" 1010
```