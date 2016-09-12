# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

# App binds to (default) port 3000
EXPOSE 3000

# Execute command
CMD [ "npm", "start" ]
