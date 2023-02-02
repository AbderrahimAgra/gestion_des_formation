FROM node
WORKDIR /home/front-end-vite
COPY package*.json .
RUN npm ci
COPY . .
CMD ["npm","run","dev"]