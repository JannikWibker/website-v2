FROM node:15

LABEL version="1.0.3"
LABEL name="website"

COPY . /app
WORKDIR /app

# install all dependencies via npm
RUN npm install

# build step
RUN npm run build

CMD node main.js
