# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY backend/ .

# Expose the necessary port
EXPOSE 3001

# Define the command to run your backend server
CMD ["node", "server.js"]

