# Stage 1: Build the static assets with Node.js
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package metadata & install dependencies
COPY package*.json vite.config.* ./
RUN npm install           # use install instead of ci to avoid lockfile mismatch

# Copy source code and build
COPY . .
RUN npm run build         # outputs to /app/dist

# Stage 2: Serve the built assets with NGINX
FROM nginx:stable-alpine

# Remove default NGINX content
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Start NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
