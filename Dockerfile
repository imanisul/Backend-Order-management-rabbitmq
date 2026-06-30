FROM  node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 4001

CMD ["npm", "run", "dev"]