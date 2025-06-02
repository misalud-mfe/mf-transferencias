FROM node:18-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package.json ./
COPY ./shared-libs/ ./shared-libs/

RUN pnpm install && pnpm add rxjs

COPY . .

EXPOSE 3003

CMD ["pnpm", "run", "start:docker"]


