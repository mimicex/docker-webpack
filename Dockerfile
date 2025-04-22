FROM node:14.0

RUN echo "deb http://security.debian.org/debian-security bullseye-security main contrib non-free" > /etc/apt/sources.list

RUN apt-get update && apt-get install -y \
    sudo \
    wget
# 建立資料夾
RUN mkdir /webpack
# 指定工作資料夾
WORKDIR /webpack
# 複製你的package
COPY ./package.json ./webpack/
# 安裝 package
RUN cd /webpack/ && npm i
# 複製檔案
COPY . .