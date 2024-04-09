FROM node:20-alpine

ENV PORT=3005

COPY . ./sann-opticals

WORKDIR /sann-opticals

RUN npm install

EXPOSE ${PORT}

CMD [ "npm", "run", "dev" ]