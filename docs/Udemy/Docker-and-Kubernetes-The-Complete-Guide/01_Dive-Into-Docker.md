---
pageClass: udemy
---

# Dive Into Docker

## Introduction to Docker

### What is Docker?

Docker 是一個開源專案，基於 Google 所推出的 Go 語言進行開發。他實做了輕量級的作業系統虛擬化解決方案，基於 Linux 軟體容器（Linux Containers, LXC）技術並進一步地進行封裝，透過在作業系統上實做虛擬化，可以將應用程式自動化部署為可攜式且可自足的容器，在雲端或本機端上部署與執行。

### Why Use Docker?

對於開發與維運人員來說，我們希望開發環境與基礎設施可以只需要進行一次的建立和設定，就能夠在任意的地方上執行，這樣一來可以避免版本問題、軟體相容性問題與作業系統問題。Docker 作為一種新興的虛擬化技術，相較於傳統的虛擬機來說執行速度更快且消耗資源較少，在建立標準的映像檔之後，可以使用映像檔來建立開發容器，大量地減少了開發、測試、部署的時間。

## Install Docker

### macOS

```bash
$ brew cask install docker
```

### Arch Linux

```bash
# Install docker and docker-compose
$ sudo pacman -S docker docker-compose

# Start Docker
$ systemctl docker.service

# Add current user to group of docker
$ sudo gpasswd -a user docker
$ newgrp docker
```

## Using the Docker Client

先來執行一個最為簡單的命令：

```bash
$ docker run hello-world
```

這個命令會先在本機端上尋找是否有 `hello-world` 的 Docker 映像檔，如果沒有的話會從 [Docker Hub](https://hub.docker.com/explore/) 上抓取到本機端上，並由 Docker Server 去創建實例。

## What's a Container?

**容器（Container）** 是 Docker 映像檔的運行實例。Docker 利用容器來執行應用程式，這些容器彼此互相隔離，我們可以將這些容器看作是簡易版的作業系統環境（他擁有自己的用戶權限、用戶空間和網路空間以及硬體資源）。