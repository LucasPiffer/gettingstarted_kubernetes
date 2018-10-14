FROM node:6-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./app/package.json /usr/src/app
COPY ./app/gulpfile.js /usr/src/app
RUN npm install
RUN npm install -g gulp
COPY ./app/app.js /usr/src/app

EXPOSE 8000

CMD ["gulp", "start"]
