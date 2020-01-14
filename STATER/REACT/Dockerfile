# Dockerfile References: https://docs.docker.com/engine/reference/builder/

# Start from the latest node base image
FROM node:alpine as builder

# Add Maintainer Info
LABEL maintainer="Cashbag <dev@cashbag.vn>"

# Set the Current Working Directory inside the container
WORKDIR /app

# Copy package.json first, for caching deps
COPY ./package.json ./
RUN npm install

# Copy data to working dir
COPY . .

# Set env vars
ENV REACT_APP_SERVER_URL=https://dev-svc.cashbagb2b.vn/
ENV SKIP_PREFLIGHT_CHECK=true
ENV GENERATE_SOURCEMAP=false

# Build
RUN npm run build

# Add to nginx
FROM nginx

# Expose port
EXPOSE 4002

# Copy file
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html