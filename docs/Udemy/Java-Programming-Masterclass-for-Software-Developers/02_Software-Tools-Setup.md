---
pageClass: udemy
---

# Software Tools Setup

## Which Version of Java?

從 2017 年起 Oracle 改變了發布 Java 和 JDK 更新的方式，在未來的八年內都將長期支持 Java 11，也就是接下來的八年內 Java 11 都會是長期支援（Long-Term Support, LTS）版本，而 2019 年三月發布的 Java 12 將會每隔六個月就更新一次。鑒於大多數企業項目較為擁腫，並不會快速升級，因此建議採用 Java SE 11 (LTS) 版本。

除此之外，很多人會聽聞 Java 的收費問題，實際上：

- Java 是個程式語言，本身沒有收不收費的問題
- Java Development Kits (JDK) 和 Java Runtime Environments (JRE) 才有授權許可與收費的問題

在 Oracle 收購昇陽公司之後，開發者必須明確地分辨使用的是 Oracle JDK 或 OpenJDK，不然可能會收到甲骨文的付款通知，在這裡推薦使用 Amazon 所推出的 [Amazon Corretto](https://aws.amazon.com/corretto/) 發布版本。

詳細的內容可以參考 [Choosing The Right JDK Vendor and JVM](https://www.youtube.com/watch?v=zf-GOkc3Ht8)。

## Setup Java Development Kit (JDK)

![Amazon Corretto](https://user-images.githubusercontent.com/26391143/81653862-c96b0d80-9467-11ea-9737-6bcce787d760.png)

根據作業系統到 [Downloads for Amazon Corretto 11](https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/downloads-list.html) 頁面下載安裝檔。

### Windows

下載 [`amazon-corretto-11-x64-windows-jdk.msi`](https://corretto.aws/downloads/latest/amazon-corretto-11-x64-windows-jdk.msi) 並進行安裝。

### MacOS

1. 下載 [`amazon-corretto-11-x64-macos-jdk.pkg`](https://corretto.aws/downloads/latest/amazon-corretto-11-x64-macos-jdk.pkg) 並進行安裝，安裝完成之後路徑會位於 `/Library/Java/JavaVirtualMachines/`
2. 執行以下命令獲取完整的安裝路徑
   ```bash
   $ /usr/libexec/java_home --verbose
   ```
3. 設定 `JAVA_HOME` 環境變數
   ```bash
   $ export JAVA_HOME=/Library/Java/JavaVirtualMachines/amazon-corretto-11.jdk/Contents/Home
   ```

### Linux

```bash
$ tar -xvf jdk-11_linux-x64_bin.tar.gz
$ sudo mkdir -p /usr/lib/jvm/jdk-11
$ sudo mv jdk-11/* /usr/lib/jvm/jdk-11
$ sudo update-alternatives --install "/usr/bin/java" "java" "/usr/lib/jvm/jdk-11/bin/java" 1010
$ sudo update-alternatives --install "/usr/bin/javac" "javac" "/usr/lib/jvm/jdk-11/bin/javac" 1010
```

## Setup Intellij IDEA
