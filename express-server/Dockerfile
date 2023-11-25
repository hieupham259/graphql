FROM node:18

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

# run npm install in our local machine
RUN npm install

COPY . .

EXPOSE 4002

CMD ["node", "index.js"]