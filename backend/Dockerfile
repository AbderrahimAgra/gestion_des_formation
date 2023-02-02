FROM node:16.18-alpine3.15
RUN npm install -g nodemon
WORKDIR /home/backend
COPY . .
RUN npm install
EXPOSE 5000

CMD ["npm","start"]