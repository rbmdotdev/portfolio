FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm uninstall tailwindcss postcss autoprefixer
RUN npm install tailwindcss@latest postcss@latest autoprefixer@latest
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
#USER node
RUN npm run build
CMD ["npm", "start"]
