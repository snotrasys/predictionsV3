# build environment
FROM  node:16-alpine3.16
RUN apk update && apk add --no-cache libc6-compat
RUN npm install -g typescript
RUN npm install -g ts-node
WORKDIR /app
COPY . /app

CMD ["npm","start"]