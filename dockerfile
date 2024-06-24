FROM node:22
WORKDIR /API-database-LOTR-bucket-list
COPY . .

RUN npm install
RUN npm run build
ENV PORT=3000
EXPOSE 3000
CMD ["npm", "run", "startlinux"]

# CMD ["npm","start"]