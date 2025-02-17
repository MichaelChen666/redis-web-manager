<!-- https://github.com/RichardLitt/standard-readme -->

<img align="right" width="100" src="https://user-images.githubusercontent.com/1582077/131063491-58e25690-6180-4e2b-9c8e-801649b2423e.png">

# RWM (Redis web manager)

[![](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/slowrookie/redis-web-manager/blob/master/LICENSE)
[![](https://github.com/slowrookie/redis-web-manager/actions/workflows/release.yml/badge.svg)](https://github.com/slowrookie/redis-web-manager/actions/workflows/release.yml)
[![Docker Hub](https://img.shields.io/docker/pulls/slowrookie/redis-web-manager.svg)](https://hub.docker.com/r/slowrookie/redis-web-manager)
![](https://shields.io/github/v/release/slowrookie/redis-web-manager)


简体中文 | [English](README.md)

RWM 是一款使用 React & Golang 开发的Web应用，用于管理Redis，支持多平台运行。

## 介绍
  - [项目截图](#项目截图)
  - [下载](#下载与安装)
  - [使用说明](#使用说明)
  - [项目结构](#项目结构)
  - [相关仓库](#相关仓库)
  - [维护者](#维护者)
  - [如何贡献](#如何贡献)
  - [使用许可](#使用许可)

## 项目截图
![项目截图](https://user-images.githubusercontent.com/1582077/131060729-54eeef49-9a16-4f72-8ca7-2dee2ba9a33e.jpg)


## 下载与安装

`Windows`, `Linux`, `MacOS`：
  [Release](https://github.com/slowrookie/redis-web-manager/releases)

`Docker`: 
  ```sh 
    docker push slowrookie/redis-web-manager:latest 
  ````

## 使用说明

`Windows`, `Linux`, `MacOS`：
下载的文件(`*.tar.gz`)解压后执行执行 `RWM` 或者 `RWM.exe` 文件。

```sh
./RWM
```

`Docker`:
```sh
docker run --rm -d  -p 63790:63790/tcp slowrookie/redis-web-manager:latest
```

服务启动后会自动调用操作系统默认浏览器，并访问 `http://127.0.0.1:63790`。

## 项目结构

- `api` 目录存放后端逻辑以及接口文件
- `web` 目录存放前端项目文件
- `.gitignore` 是 `Git` 用于忽略的配置文件。
- `.goreleaser.yml` 是 `goreleaser` 的配置文件。
 
注意：如果在 `main.go` 文件中 `go:embed web/build/*` 错误，请先在 `web` 目录执行 `npm install & npm run build` 安装和构建前端项目.

## 相关仓库

- [microsoft/fluentui](https://github.com/microsoft/fluentui)
- [gin-gonic/gin](https://github.com/gin-gonic/gin)
- [go-redis/redis](https://github.com/go-redis/redis)

## 维护者

[@slowrookie](https://github.com/slowrookie)

## 如何贡献

非常欢迎你的加入！[提一个 Issue](https://github.com/slowrookie/redis-web-manager/issues/new) 或者提交一个 Pull Request。


## 使用许可

[MIT](LICENSE) © slowrookie
