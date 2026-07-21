# Stage 1: Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package management files
COPY package*.json ./

# Install dependencies (use npm install if package-lock is not strictly synced, or npm ci)
RUN npm ci --legacy-peer-deps || npm install

# Copy application source files
COPY . .

# Build the production bundle
RUN npm run build

# Stage 2: Production web server stage (unprivileged non-root user)
FROM nginxinc/nginx-unprivileged:alpine

# Copy custom Nginx web server configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose unprivileged HTTP port
EXPOSE 8080

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
