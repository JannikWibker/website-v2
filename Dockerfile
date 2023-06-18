# **build stage*
FROM node:20 as build

LABEL version="2.1.0"
LABEL name="website-jannik"

COPY package.json   /app/package.json
COPY pnpm-lock.yaml /app/pnpm-lock.yaml

WORKDIR /app

# install all dependencies via npm
RUN npx pnpm@latest install

COPY . /app

# build step
RUN npx pnpm@latest build

# **execution stage**
FROM gcr.io/distroless/nodejs:18

COPY --from=build /app/.next/standalone ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next/static ./.next/static

CMD ["server.js"]

