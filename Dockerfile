FROM node:latest

WORKDIR /app

COPY . .

ENTRYPOINT [ "sh", "init.sh" ]