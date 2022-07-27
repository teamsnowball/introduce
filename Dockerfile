FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig*.json ./

RUN yarn install

COPY . .

EXPOSE 80
CMD [ "yarn", "dev"]