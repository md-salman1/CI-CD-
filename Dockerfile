# Use the official lightweight Nginx image
FROM nginx:1.23-alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Install dependencies and clean cache
RUN apk add --no-cache \
    nodejs \
    npm \
    && npm install -g serve

# Copy website files
COPY index.html .
COPY styles.css .
COPY script.js .

# Fix permissions
RUN chown -R nginx:nginx /usr/share/nginx/html

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
