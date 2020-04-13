# Creating a Production-Grade Workflow

## Development Workflow

一個常見的開發流程會涉及到三個階段，也就是開發（develop）、測試（test）和佈署（deploy）。舉例來說，開發團隊會先從主分支（master branch）創建一個分支並進行開發，開發完成後會推送（push）到代碼託管平台如 GitHub 上，並創建一個 PR（Pull Request）等待 Merge 進入主分支。在這一個階段，代碼會先被推送到持續集成（Continuous Integration, CI）平台運行測試，如果沒有問題則會將分支進行 Merge 後再次運行測試，一切都完成並且沒有問題就會佈署到雲端服務器。

## Create the Dev Dockerfile

為了區別開發環境（Development Environment）與正式環境（Production Environment），我們創建後綴為 `.dev` 的 `Dockerfile.dev` 來與之區別。但在創建 Docker 映像時，需要加上 `-f` 參數來指定設定檔：

```bash
$ docker build -f Dockerfile.dev .
```

## Docker Volumes

在前面的內容曾經提到，運行容器中的狀態會是創建映像時的快照，因此如果修改了檔案內容，必須重新建構 Docker 映像。但實際開發時，我們不可能一有修改就重新創建映像，因此需要把資料夾掛載到容器中，而非單純的複製，這時就必須使用 Docker Volume 了。在命令行中使用 `-v` 參數如下，將容器外當前位置 `${pwd}` 映射到 `/app`：

```bash
# docker run -p <LOCAL_PORT>:<DOCKER_PORT> -v <BOOKMARK> -v <LOCAL_FOLDER>:<DOCKER_FOLDER> <IMAGE_ID>
$ docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <IMAGE_ID>
```

## Use Docker Volumes with Docker Compose

我們可以使用 Docker Compose 來創建容器，並把 Docker Volume 的相關設定寫在 `docker-compose.yaml` 中，避免每次運行容器時都需要打一串很長的命令：

```
version: '3'
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    volumes:
      - /app/node_modules
      - .:/app
```

## Docker Compose for Running Tests

直接使用 Docker Volume 掛載到容器中，我們可以很簡單地進行測試。除此之外，也能夠另外創建一個容器負責測試的部份：

```
version: '3'
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    volumes:
      - /app/node_modules
      - .:/app
  test:
    build:
      context: .
      dockerfile: Dockerfile.dev
    volumes:
      - /app/node_modules
      - .:/app
    command: ["npm", "run", "test"]
```

## Production Container

在最後的正式環境中，我們還需要使用 Nginx 來作為網頁伺服器，來處理反向代理、負載平衡器和 HTTP 快取。創建 `Dockerfile` 如下：

```
FROM node:alpine as builder

WORKDIR '/app'

COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
```

最後構建映像並運行容器：

```bash
# build production container
$ docker build .

# run container
$ docker run -p 8080:80 <IMAGE_ID>
```