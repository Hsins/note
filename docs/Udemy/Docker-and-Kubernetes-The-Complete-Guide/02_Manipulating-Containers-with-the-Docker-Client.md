---
pageClass: udemy
---

# Manipulating Containers with the Docker Client

## Creating and Running a Container from an image

```bash
# Create and Run the hello-world container
$ docker run hello-world

# Create and Run the override commands with the busybox container
$ docker run busybox echo hi there
$ docker run busybox echo bye there
```

## Listing Running Containers

```bash
# List all running containers
$ docker ps

# Show all containers that have been created on our machine
$ docker ps --all
```

## Docker Run = Docker Create + Docker Start

```bash
# Create docker container
$ docker create hello-world

# Start docker container
$ docker start <CONTAINER_ID>       # without logs
$ docker start -a <CONTAINER_ID>    # with logs
```

## Removing Stopped Containers

```bash
$ docker system prune
```

## Retrieving Log Outputs

```bash
# Retrieve Logs
$ docker logs <CONTAINER_ID>
```

## Stop or Kill the running Containers

```bash
# Stop the running containers
$ docker stop <CONTAINER_ID>
$ docker kill <CONTAINER_ID>
```

## Multi-Command Containers

```bash
# Execute an additional command in a container
$ docker exec -it <CONTAINER_ID> <COMMAND>

# Getting a command prompt in a container
$ docker run -it busybox sh
$ docker exec -it <CONTAINER_ID> sh
```