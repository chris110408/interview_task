FROM node:10.15.3

RUN mkdir /usr/src/server
COPY . /usr/src/server

WORKDIR /usr/src/server


RUN npm install

CMD ["npm","start"]

EXPOSE 8888
