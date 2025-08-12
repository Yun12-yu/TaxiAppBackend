# Use official Node.js LTS image
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install --include=dev

# Copy source code
COPY . .

# Generate Prisma client (build-time)
RUN npx prisma generate

# Fix executable permissions for Nest CLI globally
run chmod +x ./mode_modules/.bin/nest
# Build the app
RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start:prod"]
