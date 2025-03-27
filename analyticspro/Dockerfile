# Step 1: Build the React app using Vite
FROM node:20 AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and build
COPY . .
RUN npm run build

# Step 2: Serve the app with NGINX
FROM nginx:alpine

# Clean default NGINX content
RUN rm -rf /usr/share/nginx/html/*

# Copy Vite output to NGINX's web root
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
