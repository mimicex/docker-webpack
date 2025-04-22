# 建立 docker webpack 環境

## Create image
```
docker build -t webpack:latest
```
## Run container
```
docker run -it \
-v ~/webpack:/webpack \
--name webpack \
-p 9000:9000 \
-d webpack:latest
```

## 你的檔案路徑:docker裡面的路徑
```
-v ~/webpack:/webpack
```
## 進入 webpack 執行指令
```
docker exec -it mctw_webpack /bin/sh
```
## 如果webpack 沒有安裝成功，可參考以下安裝 webpack 方式
```
npm install webpack webpack-cli --save-dev

```