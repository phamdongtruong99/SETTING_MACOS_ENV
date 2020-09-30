FROM node:12.16.1-alpine

WORKDIR /app/
ADD package.json .
RUN yarn install --production=true
ADD src ./src
RUN ls -ath

CMD [ "yarn", "start"]
EXPOSE 3000
