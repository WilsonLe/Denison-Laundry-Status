FROM node:14
USER root
WORKDIR /usr/src/app

COPY . .

RUN yarn install

RUN yarn decrypt

EXPOSE 7345

CMD ["yarn", "start"]