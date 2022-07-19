# EjercicioAngular

Proyecto desarrollado con [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.


## Proceso de desarrollo

Se crearon componentes para tener un login y una página donde se desplegará el listado de los POSTS

Al momento de loguearse, se ejecuta el servicio del token. También implementé un
servicio de Cookie para almacenar el valor del token y luego rescatarlo para obtener el acceso al listado de posts.

Si se loguea de forma incorrecta, lo redirigirá a la página principal. De lo contrario, lo redirigirá hasta la ruta http://localhost:4200/listadoPosts

utilice un Guard para proteger la ruta del listadoPosts, para impedir que consuma el servicio y muestre la información si no está autenticado.