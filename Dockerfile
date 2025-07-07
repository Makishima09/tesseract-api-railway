# Usa una imagen con Node.js ya preparado
FROM node:18-slim

# Instala Tesseract + dependencias
RUN apt-get update && apt-get install -y \
  tesseract-ocr \
  tesseract-ocr-spa \
  libleptonica-dev \
  && apt-get clean

# Crea directorio de trabajo
WORKDIR /app

# Copia archivos
COPY package*.json ./
RUN npm install

COPY . .

# Exponer puerto 8080
EXPOSE 8080

# Comando para iniciar la API
CMD ["node", "index.js"]
