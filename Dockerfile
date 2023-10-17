FROM node:20.5.1-slim

RUN apt update -y && apt install procps -y

RUN npm install -g @nestjs/cli@10.1.17

USER node

WORKDIR /home/node/app

CMD [ "tail", "-f", "/dev/null" ]