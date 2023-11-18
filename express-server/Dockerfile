FROM node:18

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

# run npm install in our local machine
RUN npm install
RUN npm install pm2 -g

ENV PM2_PUBLIC_KEY i1ieemt7olps0cd
ENV PM2_SECRET_KEY 990yrqc8b5w0gmx

COPY . .

EXPOSE 4002

CMD ["pm2-runtime", "start", "./ecosystem.config.js", "--env", "production"]