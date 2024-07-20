# Use the official Node.js 16 image as the base image
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Remove .env(local file) and then rename .env.production to .env
RUN rm .env && mv .env.production .env

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["node", "src/index.js"]