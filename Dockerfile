##################################################
FROM node:18-alpine3.16 as deps

WORKDIR /home/node/app

COPY package.json .
RUN node -e "console.log(require('./package.json').version)" > ./version.txt

COPY *.json .npmrc ./
RUN npm install --omit=dev --omit=optional \
    && mv ./node_modules ./node_modules_prod \
    && npm install --omit=optional

##################################################
FROM deps as build

WORKDIR /home/node/app

RUN ls -al
COPY --from=deps /home/node/app/node_modules ./node_modules
COPY *.json ./
COPY src src

RUN npm run build

##################################################
FROM node:18-alpine3.16 as prod-image

WORKDIR /home/node/app

COPY --from=build /home/node/app/dist ./dist
COPY --from=build /home/node/app/node_modules_prod node_modules

ENTRYPOINT ["node", "dist/index.js"]