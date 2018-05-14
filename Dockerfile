FROM node:9

WORKDIR /app

COPY package* ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "start" ]
