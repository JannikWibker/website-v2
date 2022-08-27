# **build stage*
FROM node:18 as build

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

# **execution stage**
FROM gcr.io/distroless/nodejs:18

COPY --from=build /app/.next/standalone ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next/static ./.next/static

CMD ["server.js"]

