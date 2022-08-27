FROM node:16

LABEL version="2.0.0"
LABEL name="website-jannik"

COPY package.json      /app/package.json
COPY package-lock.json /app/package-lock.json

WORKDIR /app

# install all dependencies via npm
RUN npm ci

COPY . /app

# build step
RUN npm run build

CMD npm run start
