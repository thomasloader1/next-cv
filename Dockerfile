# Definir la imagen base con Node 18
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de la aplicación (package.json y package-lock.json primero)
COPY . ./app
RUN cd app && npm install

# Exponer el puerto en el que se ejecutará la aplicación de React
EXPOSE 3000
CMD ["npm", "run", "dev"]