# Use an official Node.js runtime as the base image
FROM node:20

# Install pnpm globally
RUN npm install -g pnpm

# Set the working directory
WORKDIR /app

# Copy the entire application
COPY . .

# Copy the environment configuration file
COPY .env.production .env

# Install app-specific dependencies
RUN pnpm install

# Generate Prisma client
RUN npx prisma generate

# Build the application
RUN pnpm run build

# Copy schema.gql to dist/src/config
RUN mkdir -p dist/src/config && cp dist/schema.gql dist/src/config/schema.gql

# Expose the application port
EXPOSE 8080

# Set NODE_ENV to production
ENV NODE_ENV=production

# Use a non-root user for better security
USER node

# Run the application
CMD [ "npm", "run", "start:migrate:prod" ]
