# Creamos la imagen base
FROM node:18.16.0

# Donde se encontrara el archivo dentro de el contenedor
WORKDIR /usr/src/app

# Copia los dos json para instalar dependencias
COPY package*.json ./

#Ejecuta el comando por consola
RUN npm i

#Copia el directorio actual a el directorio especificado en el comtenedor
COPY . .

#El puerto donde la app se expondra 
EXPOSE 3000

# Define los comando de inicio de app
CMD [ "npm", "run", "start:dev" ]