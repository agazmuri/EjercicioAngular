# EjercicioAngular

Proyecto desarrollado con [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.


## Proceso de desarrollo

Se crearon dos módulos con sus respectivos componentes para tener un login y una página donde se desplegará el listado de los POSTS 

Se creo el archivo de Rutas para la navegación y el establecimiento de las URLs.

Al momento de loguearse, se ejecuta el servicio del token. También implementé un
servicio de Cookie para almacenar el valor del token y luego rescatarlo para obtener el acceso al listado de posts.

Si se loguea de forma incorrecta, lo redirigirá a la página principal. De lo contrario, lo redirigirá hasta la ruta http://localhost:4200/listadoPosts

Utilice un Guard para proteger la ruta del listadoPosts, para impedir que consuma el servicio y muestre la información si no está autenticado.

Existe una tabla que carga el contenido.

Tanto el login como la tabla, están configurados con estilos de SASS y CSS.

Implementé un botón para cerrar la sesión y eliminar la cookie que contiene el token.

Se creo una carpeta donde están implementados todos los servicios disponibles.

Con respecto al último servio, con el que se obtienen las imágenes, se presenta un erro con código 200, lo cual no me permite rescatar la url