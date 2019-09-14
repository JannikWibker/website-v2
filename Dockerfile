FROM node:11

LABEL version="1.0.1"
LABEL name="website"

COPY . /app
WORKDIR /app

# install all dependencies via npm
RUN npm i

# build step
RUN npm build

CMD node index.js
