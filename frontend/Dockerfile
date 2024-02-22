# React block
FROM node:latest as builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json ./
RUN npm install

COPY . .

RUN npm run build

# Nginx block
FROM nginx

EXPOSE 80

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build /usr/share/nginx/html