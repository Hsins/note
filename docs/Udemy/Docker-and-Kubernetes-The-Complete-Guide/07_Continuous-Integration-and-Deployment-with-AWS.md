# Continuous Integration and Deployment with AWS

## AWS Elastic Beanstalk

Elastic Beanstalk 是 AWS 所提供的服務，使用者可以透過這像服務簡單地管理和部署網頁應用程式。只需要上傳開發好的應用程式，透過 Elastic Beanstalk 可以動態地完成容量配置、負載均衡（load balancing）、水平自動擴展（auto scaling）和應用程式的運行狀況監控（monitoring）的部署需求。

## Travis CI Setup

創建 `.travis.yml` 設定檔案如下：

```
sudo: required
services:
  - docker

before_install:
  - docker build -t hsins/udemy_docker-react -f Dockerfile.dev .

script:
  - docker run -e CI=true USERNAME/docker-react npm run test

deploy:
  edge: true
  provider: elasticbeanstalk
  region: "us-west-2"
  app: "docker"
  env: "Docker-env"
  bucket_name: ""
  bucket_path: "docker"
  on:
    branch: master
  access_key_id: $AWS_ACCESS_KEY
  secret_access_key: $AWS_SECRET_KEY
```

## IAM: Identity and Access Management

上述設定檔中的 `AWS_ACCESS_KEY` 和 `AWS_SECRET_KEY` 都是在 AWS 的 IAM 中進行管理。