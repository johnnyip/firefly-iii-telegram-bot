# Use official Node.js 18 as the base image
FROM node:18-alpine3.16 AS base
WORKDIR /home/node/app

# Install production dependencies
FROM base AS production
COPY package*.json ./
RUN npm ci --only=production

# Use official Node.js 18 as the base image for the build stage
FROM node:18-alpine3.16 AS build
WORKDIR /home/node/app
COPY . .
RUN npm ci && npm run build

# Use the base image
FROM base AS release
WORKDIR /home/node/app
# Copy production dependencies
COPY --from=production /home/node/app/node_modules ./node_modules
# Copy built source code
COPY --from=build /home/node/app/dist ./dist
# Copy locales
COPY --from=build /home/node/app/dist/locales ./dist/locales

# Set the command to start the application
CMD ["node", "dist/index.js"]
