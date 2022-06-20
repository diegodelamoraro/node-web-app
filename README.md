# node-web-app
Bienvenido a mi primer repo de Git Hub

Este es un proyecto en node.js en el cual se definieron una serie de APIs para consultar (GET), modificar (PUT) y/o eliminar (DELETE) registros de una base de datos de mongodb.

El primer paso para ejecutar este proyecto es instalar Docker Desktop, una vez que lo tengo instalado puede iniciar un contenedor MongoDB usando Docker con el siguiente comando:
 docker run --name mongodb -d mongo

Para acceder localmente a la base de datos, es necesario exponer un puerto usando el argumento -p (puerto)
docker run --name mongodb -d -p 27017:27017 mongo

Dentro de la carpeta raiz del proyecto, se encuentra un archivo llamado "mydb.json" en donde se aloja la informacion guardada de la colleción de usuarios. Es necesario importarla para crear la coleccion dentro del docker de mongodb.

Para realizar esto, es necesario montar un volumen para acceder a un archivo almacenado en su máquina local desde el interior del contenedor utilizando el siguiente comando:

docker run -it -v $(pwd):/tmp mongo:5.0 mongoimport --drop --collection=users "mongodb+srv://user:password@clusterURL/database" /tmp/mydb.json

o si mongodb no se encuentra dentro de un docker, solo es necesario el siguiente comando:

mongoimport --db test --collection users --file mydb.json

-------------------------------------------------

A continuación se en listan las APIs desarrolladas.

GET / Obtener todos los usuarios de la base de datos
Ejemplo: http://0.0.0.0:8080/user/

GET / Obtener información de los usuarios por "type" y "deparment"
Ejemplo: http://0.0.0.0:8080/user/type/admin/department/gerencia

PUT / Actualizar los datos de un usuario por id, si no existe el id se creara un nuevo registro
Ejemplo: http://0.0.0.0:8080/user/62af2dfa32e701371611dcce
Mandar en el Body (x-www-form-urlencoded) los parametros
Ejemplo:
name:Diego de la Mora Rodriguez
email:diego.delamoraro@gmail.com
password:12345678
type:admin
department:gerencia
date:2022-06-19T05:00:00.000+00:00

DELETE / Eliminar uno o varios registros, el campo de busqueda es "department"
Ejemplo: http://0.0.0.0:8080/user/soporte


Además, dentro de este proyecto se encuentra el archivo DockerFile es cual es necesario para poder replicar el funcionamiento del API. 

Ejecute el siguiente comando para compilar el contenedor:

docker run -p 8080:8080 -d {username}/node-web-app

Una vez que el contenedor esté listo y en funcionamiento, puede inspeccionar una lista de sus contenedores en ejecución con docker ps

Con el contenedor en ejecución, ahora, podrá consumir el API desde postman o cualquier cliente web.


Por último, he agregado una carpeta de "evidencia" en donde se encuentran unas capturas de pantalla donde se puede visualizar que estoy utilizando Visual Studio Code, Docker Desktop y Mongo Compass
