# 🖼️ API OCR en Español

Una API REST simple y eficiente para extraer texto de imágenes usando Tesseract OCR, optimizada para el idioma español.

## 📋 Descripción

Esta API permite convertir imágenes que contienen texto en texto plano utilizando reconocimiento óptico de caracteres (OCR). El servicio está configurado específicamente para el idioma español y puede ser desplegado fácilmente usando Docker.

## ✨ Características

- 🔤 **Soporte para español**: Optimizado para reconocer texto en español
- 🐳 **Dockerizado**: Fácil despliegue con Docker
- ⚡ **Rápido**: Procesamiento eficiente de imágenes
- 🧹 **Limpio**: Eliminación automática de archivos temporales
- 🌐 **API REST**: Interfaz simple y fácil de usar

## 🚀 Instalación y Uso

### Opción 1: Usando Docker (Recomendado)

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/tesseract-api-railway.git
   cd tesseract-api-railway
   ```

2. **Construye la imagen Docker:**
   ```bash
   docker build -t ocr-api .
   ```

3. **Ejecuta el contenedor:**
   ```bash
   docker run -p 8080:8080 ocr-api
   ```

### Opción 2: Instalación local

1. **Instala las dependencias del sistema:**
   ```bash
   # Ubuntu/Debian
   sudo apt-get update
   sudo apt-get install tesseract-ocr tesseract-ocr-spa
   
   # macOS
   brew install tesseract tesseract-lang
   ```

2. **Instala las dependencias de Node.js:**
   ```bash
   npm install
   ```

3. **Ejecuta la aplicación:**
   ```bash
   npm start
   ```

## 📡 Uso de la API

### Endpoint

**POST** `/ocr`

### Parámetros

- `image`: Archivo de imagen (formato: JPG, PNG, etc.)

### Ejemplo de uso con cURL

```bash
curl -X POST \
  -F "image=@tu-imagen.jpg" \
  http://localhost:8080/ocr
```

### Ejemplo de uso con JavaScript

```javascript
const formData = new FormData();
formData.append('image', fileInput.files[0]);

fetch('http://localhost:8080/ocr', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => {
  console.log('Texto extraído:', data.text);
})
.catch(error => {
  console.error('Error:', error);
});
```

### Respuesta

```json
{
  "text": "El texto extraído de la imagen aparecerá aquí..."
}
```

### Respuesta de error

```json
{
  "error": "OCR failed",
  "detail": "Descripción del error..."
}
```

## 🛠️ Tecnologías utilizadas

- **Node.js**: Runtime de JavaScript
- **Express.js**: Framework web
- **Multer**: Middleware para manejo de archivos
- **Tesseract OCR**: Motor de reconocimiento óptico de caracteres
- **Docker**: Contenedorización

## 🙏 Agradecimientos

Este proyecto utiliza [Tesseract OCR](https://github.com/tesseract-ocr/tesseract) como motor de reconocimiento óptico de caracteres. El Dockerfile está basado en la imagen oficial de [jitesoft/docker-tesseract-ocr](https://github.com/jitesoft/docker-tesseract-ocr) que proporciona una implementación optimizada de Tesseract para contenedores Docker.

### Proyectos relacionados

- **[Tesseract OCR](https://github.com/tesseract-ocr/tesseract)**: Motor OCR de Google
- **[jitesoft/docker-tesseract-ocr](https://github.com/jitesoft/docker-tesseract-ocr)**: Imagen Docker oficial de Tesseract OCR

## 📁 Estructura del proyecto

```
tesseract-api-railway/
├── index.js          # Servidor principal
├── package.json      # Dependencias de Node.js
├── Dockerfile        # Configuración de Docker
└── README.md         # Este archivo
```

## 🔧 Configuración

### Variables de entorno

- `PORT`: Puerto en el que se ejecutará la API (por defecto: 8080)

### Configuración de Tesseract

El servicio está configurado para usar el idioma español (`-l spa`). Para agregar más idiomas, modifica el Dockerfile y el comando en `index.js`.

## 🚢 Despliegue

### Railway

Este proyecto está optimizado para Railway. Simplemente conecta tu repositorio de GitHub a Railway y se desplegará automáticamente.

### Otras plataformas

El proyecto es compatible con cualquier plataforma que soporte Docker:
- Heroku
- DigitalOcean
- AWS
- Google Cloud Platform

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## ⚠️ Limitaciones

- El servicio está optimizado para texto en español
- La calidad del OCR depende de la claridad de la imagen
- No soporta archivos PDF (solo imágenes)

## 📞 Soporte

Si tienes alguna pregunta o problema, por favor abre un issue en este repositorio.

---

**Desarrollado con ❤️ para la comunidad hispanohablante** 