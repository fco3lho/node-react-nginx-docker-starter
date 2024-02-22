# Starter application using Node.js + React.js + Nginx + Docker

It's a initial application for help the peoples what want to build a application biggest for production using containers Docker. **React.js** is on the **/frontend** folder and **Node.js** is on the **/backend** folder.

  - **Node.js:** At the moment, v21.6.2. Using the latest version, configured on Dockerfile. 
  - **React.js:** At the moment, v18.2.0. Using the latest version of the Node.js, React.js also update. Bootstrapped using **create-react-app**.
  - **MySQL:** At the moment, v8.3.0. Using the latest version, configured on docker-compose.yml.
  - **Nginx:** v1.24.0
  - **Docker:** v25.0.3
  - **Docker Compose:** v2.24.5
  
# How to use

```shell
$ git clone https://github.com/fco3lho/node-react-nginx-docker-starter.git
$ cd node-react-nginx-docker-starter

# Setup
$ docker-compose up -d

# Start
$ open http://localhost:80
```


