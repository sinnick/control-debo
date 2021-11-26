FROM node:16
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 1337
CMD ["npm", "run", "start"]
