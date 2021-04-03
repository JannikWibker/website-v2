FROM node:15

LABEL version="1.0.3"
LABEL name="website"

COPY package.json      /app/package.json
COPY package-lock.json /app/package-lock.json

WORKDIR /app

# install all dependencies via npm
RUN npm ci

COPY . /app

# build step
RUN npm run build

CMD node main.js

