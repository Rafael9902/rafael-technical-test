FROM node:18-alpine as build

WORKDIR /rafael-technical-test

COPY package.json .

RUN npm install -g pnpm
RUN pnpm install

COPY . .

EXPOSE 3000

CMD ["pnpm", "start"]
