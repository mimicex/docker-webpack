# 建立 docker webpack 環境

Create image
```
docker build -t webpack:latest
```
Run container
```
docker run -it \
-v ~/webpack:/webpack \
--name mctw_webpack \
-p 9000:9000 \
-d webpack:latest
```
進入 webpack 執行指令
```
docker exec -it mctw_webpack /bin/sh
```
你的檔案路徑:docker裡面的路徑
```
-v ~/webpack:/webpack
```