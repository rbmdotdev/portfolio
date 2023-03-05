FROM node:lts-alpine as foundation

WORKDIR /usr/src/client

ENV NODE_ENV=production

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm uninstall tailwindcss postcss autoprefixer
RUN npm install tailwindcss@latest postcss@latest autoprefixer@latest
RUN npm install

COPY . .

EXPOSE 3000

RUN chown -R node /usr/src/client

#USER node

RUN npm run build
CMD ["npm", "start"]

FROM foundation as development

ENV NODE_ENV=development

RUN npm install

CMD ["npm", "run", "dev"]
