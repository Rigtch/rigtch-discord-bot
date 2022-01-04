FROM node:16.10.0
RUN mkdir node
COPY . ./node
WORKDIR ./node/
RUN yarn install
CMD ["yarn", "start"]
