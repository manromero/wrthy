FROM node:16-alpine AS builder
ENV NODE_ENV production
# Add a work directory
WORKDIR /app
# Copy app files
COPY . .
# Cache and Install dependencies
RUN npm install --production
# Build the app
RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]