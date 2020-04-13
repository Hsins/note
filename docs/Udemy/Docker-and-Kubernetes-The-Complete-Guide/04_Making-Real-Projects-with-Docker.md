---
pageClass: udemy
---

# Making Real Projects with Docker

## Project Outline

在這一節的內容中，會使用 Docker 容器來實際打包一個簡單的 Node.js 網路應用程式專案。大致上可以分為以下步驟：

1. 創建 Node.js 網路應用程式
2. 創建 `Dockerfile`
3. 使用 `docker build` 創建 Docker 映像
4. 使用 Docker 映像創建並運行容器實例
5. 開放網路連接

在內容中會有一部份是錯誤的使用方式，這部份會進行強調與說明。

## Setup Node Server

首先在專案資料夾下建立 `index.js` 和 `package.json` 檔：

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('How are you doing');
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
```

```
{
  "dependencies": {
    "express": "*"
  },
  "scripts": {
    "start": "node index.js"
  }
}
```

## Planned Error: NPM NOT FOUND

在創建好 `index.js` 和 `package.json` 之後，在目錄下創建一個 `Dockerfile` 檔案：

```
# Specify a base image
FROM alpine

# Install some dependencies
RUN npm install

# Default command
CMD ["npm", "start"]
```

執行 `docker build .` 命令時，系統會返回 `/bin/sh: npm: not found` 的錯誤訊息。

這是由於我們所選擇的基礎映像 [`alpine`](https://hub.docker.com/_/alpine) 並不包含 `npm` 指令。我們可以選擇其他的映像，比如 [`node`](https://hub.docker.com/_/node) 或是使用帶有標籤的 `node:alpine`。

目前 Docker 官方推薦使用安全且輕量的 [Alpine Linx](https://www.alpinelinux.org/) 代替其他作業系統作為基礎映像。他的容量僅僅只有 5 MB 左右，能夠提昇下載速度，並且提高主機之間的切換方便性，也佔用較少的硬碟空間。

## Planned Error: NO SUCH FILE

我們將選擇的基礎映像改為已經含有 `npm` 命令的 `node:alpine`：

```
# Specify a base image
FROM node:alpine

# Install some dependencies
RUN npm install

# Default command
CMD ["npm", "start"]
```

執行 `docker build .` 命令時，此時系統會返回 `no such file or directory, open '/package.json'` 的錯誤訊息。

這是由於容器在創建時，所有的檔案系統與內容都來自於基礎映像的快照（snapshot），也就是說我們在專案資料夾中的 `index.js` 和 `package.json` 並不存在於容器所認知的檔案系統中。為了解決這個問題，我們要將專案文件夾中的檔案，在容器被創建時一併複製一份進去：

```
# Specify a base image
FROM node:alpine

# Install some dependencies
COPY ./ ./
RUN npm install

# Default command
CMD ["npm", "start"]
```

接著創建映像並運行容器：

```bash
$ docker build -t hsins/simpleweb .
$ docker run hsins/simpleweb
```

## Container Port Mapping

此時我們如果直接訪問 [http://localhost:8080/](http://localhost:8080/) 是不會有任何結果的，因為網頁應用所啟用的通訊埠（port）是在容器內，還需要進行通訊埠轉發（Port Mapping）。通訊埠轉發並不會在 `Dockerfile` 中進行設定，而是針對容器進行設定：

```bash
# docker run -p <LOCAL_PORT>:<CONTAINER_PORT> <IMAGE_NAME>
$ docker run -p 8080:8080 hsins:simpleweb
```

## Specifying a Working Directory

到目前為止，還有一個美中不足的就是我們並沒有指定工作目錄。這樣一來所有複製的檔案，以及容器運行後的進入點會是系統根目錄，倘若我們要複製的檔案或文件夾與之衝突，會被覆蓋掉而造成錯誤，也有安全性的問題。我們應該在 `Dockerfile` 中設定工作目錄：

```
# Specify a base image
FROM node:alpine

WORKDIR /usr/app

# Install some dependencies
COPY ./ ./
RUN npm install

# Default command
CMD ["npm", "start"]
```

## Minimizing Cache Busting and Rebuilds

容器的運行來自於映像的快照，而映像中的所有內容與設定是 `docker build` 時根據 `Dockerfile` 與專案文件夾下的內容所決定的，倘若今天修改了 `index.js` 的內容，我們必須重新運行一次 `docker build` 來生成映像。為了能夠加快映像的生成，我們可以善用緩存：

```
# Specify a base image
FROM node:alpine

WORKDIR /usr/app

# Install some dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default command
CMD ["npm", "start"]
```

注意我們在執行 `npm install` 之前複製 `package.json`，而其餘檔案則在 `npm install` 之後才進行複製。也就是說，當重新運行 `docker build` 時，如果 `package.json` 中的內容沒有變動，會直接使用緩存來加速映像的創建。