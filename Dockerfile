From node:16-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
# ENTRYPOINT [ "npm","run","dev" ]
# CMD [ "npm","run","dev" ]
EXPOSE 7000
CMD ["npm","start"] 
