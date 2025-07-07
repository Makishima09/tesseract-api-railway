FROM jitesoft/tesseract-ocr:latest

RUN apk add --no-cache nodejs npm ttf-dejavu && \
    npm install -g pm2

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080

CMD ["pm2-runtime", "index.js"]