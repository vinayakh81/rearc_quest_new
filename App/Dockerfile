# Use Node.js 14 Alpine as the base image
FROM node:14-alpine

# Create and set the working directory
WORKDIR /src

# Copy package.json and package-lock.json files
COPY ./src/package.json .

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY ./src/ .

# Expose the port the app runs on
EXPOSE 3000

# Set the default environment variable
ENV SECRET_WORD="SuperSecretWord"

# Start the application
CMD ["node", "server.js"]