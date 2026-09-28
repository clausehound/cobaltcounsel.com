# Build image for DigitalOcean App Platform (static site; output_dir /app/public)
FROM node:22
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
