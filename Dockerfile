# **build stage*
FROM node:18 as build

LABEL version="2.1.0"
LABEL name="website-jannik"

COPY package.json   /app/package.json
COPY pnpm-lock.yaml /app/pnpm-lock.yaml

RUN npm install -g pnpm

WORKDIR /app

# install all dependencies via npm
RUN CI=1 pnpm install

COPY . /app

# build step
RUN CI=1 pnpm build

# **execution stage**
FROM gcr.io/distroless/nodejs:18

COPY --from=build /app/next.config.mjs ./
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules

COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static

CMD ["server.js"]
