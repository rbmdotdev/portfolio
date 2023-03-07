FROM node:lts-alpine as foundation

WORKDIR /usr/src/server


COPY ["package.json", "yarn-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN yarn

COPY . .

#RUN yarn global add @nestjs/cli

EXPOSE 3000

RUN chown -R node /usr/src/server

ENV NODE_ENV=production
#USER node

RUN yarn build
CMD ["yarn", "start"]

FROM foundation as development

ENV NODE_ENV=development

RUN yarn

CMD ["yarn", "start:dev"]
