# Docker Compose with Multiple Local Containers

## Connect Different Containers

在這一小節，我們的目的是創建多個運行 Node.js 的伺服器容器，並存取相同的一個資料庫容器。如果要使當前運行中的不同容器間彼此互相連接，通常會使用 Docker Compose。

## `docker-compose.yaml` File

Docker Compose 是一個可以讓你可以透過一個指令就可以控制所有專案中所需要服務的工具，在這之前我們必須先創建一個 YAML 檔案來描述和定義專案中不同服務的運作關係：

```
version: '3'
services:
  redis-server:
    image: 'redis'
  node-app:
    build: .
    ports:
      - "4001:8081"
```

## Docker Compose Commands

```bash
# docker run myimage
$ docker-compose up

# docker build . + docker run myimage
$ docker-compose up --build

# Launch in background
$ docker-compose up -d

# Stop Containers
$ docker-compose down
```

## Automatic Container Restarts

### Restart Policies

- `"no"`: Never attempt to restart this container if it stops or crashes.
- `always`: If this containers stops for any reason, always attempt to restart it.
- `on-failure`: Only restart if the container stops with an error code.
- `unless-stopped`: Always restart unless the developers forcibly stop it.

### Setup in YAML File

```
version: '3'
services:
  redis-server:
    image: 'redis'
  node-app:
    restart: 'no'
    build: .
    ports:
      - "4001:8081"
```

## Container Status with Docker Compose

```bash
$ docker-compose ps
```