FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json .
RUN npm install

COPY . .

RUN npm install pm2@latest -g

EXPOSE 3001

CMD ["pm2-runtime", "start", "index.js", "--name", "backend-starter"]