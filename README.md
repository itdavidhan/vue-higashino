# vue-higashino

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 安装过程

# 一 准备工作（安装环境，基本工具）

```bash

# 1 安装node.js


# 2 安装淘宝镜像
npm install -g cnpm --registry= https://registry.npm.taobao.org

# 3 安装webpack
npm install webpack -g

# 4 vue-cli脚手架构建工具
npm install vue-cli -g

```

# 二 使用vue-cli构建项目

```bash

# 1 使用git在相关目录右键选择Git Bash Here


# 2 vue init webpack exprice
注意这里的“exprice” 是项目的名称可以说是随便的起名，但是需要主要的是“不能用中文”

# 3 cd 命令进入创建的工程目录
首先cd exprice（这里是自己建工程的名字）

# 4 安装项目依赖：npm install
很慢的话，使用cnpm install

# 5 启动项目
输入：npm run dev

```

# 安装所需

```bash

# 1 安装vuex 
npm install vuex -D

# 2 安装less/less-loader 
npm install less less-loader -D

# 3 安装stylus/stylus-loader 
npm install stylus stylus-loader -D

# 4 安装echarts 
npm install echarts -D

# 5 安装elementUI 
npm install element-ui -D




```