# Build image for DigitalOcean App Platform (static site; output_dir /app/public)
FROM node:22
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# Set only by preview apps (BUILD_TIME env on App Platform); see src/_data/env.js.
ARG SITE_PREVIEW
ENV SITE_PREVIEW=$SITE_PREVIEW
RUN npm run build
