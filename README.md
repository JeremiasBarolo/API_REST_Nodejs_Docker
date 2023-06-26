# API REST Usando ExpressJS

Este es un ejercicio de Backend para xAcademy donde creamos una API desde cero.
Dentro de la rama "Master" de mi proyecto van a encontrar el ejercicio terminado, donde se expone que se cumplen todos los requisitos, pero existe una rama secundaria donde estare terminando de armar el proyecto final: Dockerizando la app y dando un cierre completo a algunas features de la app.

# Para tener en cuenta 

El roadmap del proyecto se encuentra especificado dentro de los commits del mismo.

# Dependecias 

Dentro del proyecto hago uso de:

```json
"dependencies": {
    "express": "^4.18.2", //Encargado del routing de la app
    "jsonwebtoken": "^9.0.0", //Generador de clave JWT
    "passport": "^0.6.0", // Authentication dentro de la misma API 
    "passport-jwt": "^4.0.1",// Authentication dentro de la misma API 
    "sequelize": "^6.32.0", // ORM para conectar con la base de datos
    "sqlite3": "^5.1.6" // Motor de base de datos
  },
  "devDependencies": {
    "nodemon": "^2.0.22" // entorno de de ejecución den ciclo
  }
```
Como tambien de:
- [Docker](https://www.docker.com/)  (Para poder ejecutar la app dentro de contendores) 
- [Insomnia](https://insomnia.rest/download) (Para poder realizar calls a la url)


# Instalacion

Deberemos clonar el repositorio dentro de su sistema, para hacerlo ejecutaremos el siguiente comando: 

```bash
git clone git@github.com:JeremiasBarolo/API_REST_Nodejs_Docker.git
```


Una vez clonado el repositorio, usaremos [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) para instalar todas las dependencias del proyecto. 

Dentro del directorio del proyecto, abrimos una terminal y ejecutamos el siguiente comando:

```bash
npm install 
```

Tambien es recomendable instalar **insmonia**, para poder enviar objetos en formato **JSON atraves de la url**. 


# Como usar
Para iniciar el servidor deberemos de ejecutar una terminal dentro del repositorio de API. 


el comando que iniciara el servidor es el siguiente:
```bash
npm run start

```
Una vez el server este ejecutandose, podra acceder a el mediante [https://localhost:8090](https://localhost:8090).

A partir de la URL base mostrada, podremos usar los **endpoints** de cada feature.



Antes de empezar a usar el proyecto debemos entender como esta formado el mismo.
### Modelado
Este proyecto cuenta con tres modelos, dos de ellos estando relacionados entre si (**Library y Book**) y uno totalmente independiente (**User**).

**Library y Book** tienen una relación de "hasMany", esto quiere decir que dentro de **una librería** pueden existir **muchos libros**, pero por las características de creación de estos libros, **no pueden existir dos libros iguales en distintas librerias**.


## Endponits

Dentro del proyecto tenemos tres **endpoints** con ramificaciones en cada uno:

**(Cada endpoint tendra dentro de su url el metodo utilizado para poder instaciarse)**

### /user
Este endpoint tiene como finalidad la administracion de los usuarios dentro de la API.

Tiene tres posibles interacciones: 

- #### /user/login (Post)
Permite loguearse a "**Admin**", este es el unico usuario del sistema. Sera requerido para algunas acciones dentro de la app. **Debera enviarse por URL el siguiente JSON**  :
```json
{
	"user": "admin",
	"password": "admin"
}

```
Si se realiza con éxito, **devolvera un TOKEN que nos permitirá realizar todas las acciones dentro del sistema**. Este mismo deberá ser enviado junto a los datos requeridos (dependiendo de cada feature irán variando) para poder hacer uso de estas funcionalidades.

- #### /user (Get) (Admin Only)

**Devuelve todos los usuarios creados en el sistema en formato JSON.** Requiere del token de **Admin** para ejecutarse.

- #### /user/create (Post) 
Permite crear un usuario, deberemos enviar por URL un JSON con un contenido parecido a este:
```json
{
  "name": "Name", #String
  "lastname": "Lastname", #String
  "email": "name@name.com", #Email format
  "password": "password" #String
}

```






### **/library**

Library es la encargada de manejar el **CRUD** de las librerias. **La creacion, modificacion y Eliminacion** de las librerias esta protegida por la autenticacion de **Admin**. **Sera necesario tener el token para poder realizarlas.**

- #### /library (Get) 
Permite traer todas libraría. 

- #### /library/create (Post) (Admin Only)
Permite crear una libraria, deberemos enviar por URL un JSON con un contenido parecido a este:
```json
{
  "name": "libraryName", #String
  "location": "Location", #String
  "telephone": "123456789" #Integer
}
```
**Esto devolvera el objeto creado en formato JSON.**


- #### /library/:idLibreria (Get) 
Permite traer una libraría. Deberemos enviar por URL el **ID** de la librería que se especifica al momento de su creación.



- #### /library/:idLibreria (Put) (Admin Only)
Permite actualizar una libraría. Deberemos enviar por URL el **ID** de la librería la cual actualizaremos y tambien el contenido en **formato JSON** que queremos actualizar.

Por Ejemplo:
```json
#Antes
{ 
  "name": "Libreria Azul", 
  "location": "Mundo Azul", 
  "telephone": "123456789" 
}
```
```json
#Actualizacion enviada por URL
{ 
  "name": "Libreria Rojo", 
  "location": "Mundo Rojo", 
  "telephone": "12345678910" 
}
```

**Esto actualizara y devolvera la libreria actualizada en formato JSON.**

- #### /library/:idLibreria (Delete) (Admin Only)
Permite Eliminar una libraría. Deberemos enviar por URL el **ID** de la librería que se desea eliminar.






### **/book**

Book permite hacer el **CRUD** de los libros. **La creacion, modificacion y Eliminacion** de los libros esta protegida por la autenticacion de **Admin**. Los libros deberan estar **OBLIGATORIAMENTE** enlasados con alguna Libreria previamente creada.

- #### /book (Get) 
Permite traer todos los libros, junto al id de sus librerias. 

- #### /book/create/:idLibreria (Post) (Admin Only)
Permite crear una libro. Deberemos enviar por URL el **ID** de la libreria donde se almacenara el libro y un JSON con un contenido parecido a este:
```json
{
	"isbn": 37451563132222, #Interger
	"title": "Mira ma, se hacer una API", #String
	"author": "Jeremias Barolo", #String
	"year": 2021 #Interger
	
}
```
**isbn** servira como Identificador de este libro, podra ser cualquier numero mientras sea unico. **Esto devolvera el objeto creado en formato JSON.**


- #### /library/:idBook (Get) 
Permite traer un libro. Deberemos enviar por URL el **ID** de la libro que se especifica al momento de su creación.



- #### /library/:idBook (Put) (Admin Only)
Permite actualizar un libro. Deberemos enviar por URL el **ID** de la libro el cual actualizaremos y tambien el contenido en **formato JSON** que queremos actualizar.

Por Ejemplo:
```json
#Antes
{
	"isbn": 37451563132222, #Interger
	"title": "Mira ma, se hacer una API", #String
	"author": "Jeremias Barolo", #String
	"year": 2021 #Interger

}
```
```json
#Actualizacion enviada por URL
{
	"isbn": 37451563132222, #Interger
	"title": "Bueno, capaz no tanto", #String
	"author": "Jeremias Barolo", #String
	"year": 2021 #Interger
    
}
```

**Esto actualizara y devolvera la libreria actualizada en formato JSON.**

- #### /library/:idBook (Delete) (Admin Only)
Permite Eliminar una libro. Deberemos enviar por URL el **ID** de la libro que se desea eliminar.



# Informacion Adicional

Aunque la app el ejercicio cumpla con los requisitos requeridos, todavía le falta cerrar algunas cuestiones. El codigo necesita optimizarse para poder consumir menos requisitos.

Sqlite debera correr en un conteiner aparte.

Los usuarios no tiene mas acciones fuera de crearse.

No cree error handlers.

Entre otras cuestiones que iré actualizando con el tiempo.

Esta API fue creada y desarrollada de manera independiente por [Jeremias Barolo](https://github.com/JeremiasBarolo).
