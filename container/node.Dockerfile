FROM node:8.16-jessie
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN cat package.json
RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "serve"]