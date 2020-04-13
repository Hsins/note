---
pageClass: udemy
---

# Building Custom Images Through Docker Server

## What is Image?

我們所運行的容器是 Docker 映像（image）的實例，在 Docker Hub 上的這些映像都是由不同的開發者或是官網所提供的映像。關於映像的設定會存放在 `Dockerfile` 檔案中，再交由 Docker Server 運行並創建實例容器。

## Building a Dockerfile

打個比方，在 `Dockerfile` 裡面所進行的設定好比就是給你一台尚未擁有作業系統的電腦，然後要做些什麼才能夠在上面安裝 Google Chrome 瀏覽器？

```bash
$ docker build .
```