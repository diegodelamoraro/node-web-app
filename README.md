# node-web-app
Bienvenido a mi primer repo de Git Hub 

Este es un proyecto en node.js en el cual se definieron una serie de APIs para consultar (GET), modificar (PUT) y/o eliminar (DELETE) registros de una base de datos de mongodb.

Dentro de este proyecto se encuentra el archivo DockerFile es cual es necesario para poder replicar el funcionamiento del API. 

Ejecute el siguiente comando para compilar el contenedor:

docker run -p 8080:8080 -d {username}/node-web-app

Una vez que el contenedor esté listo y en funcionamiento, puede inspeccionar una lista de sus contenedores en ejecución con docker ps

Con el contenedor en ejecución, ahora, podrá obtener los datos de la tabla usuarios ingresando la dirección http://0.0.0.0:8080/user/ en su navegador.

