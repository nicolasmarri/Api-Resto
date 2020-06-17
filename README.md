## Proyecto Delilah Restó
Delilah Restó es una API que permite la conexión con una base de datos MySQL para almacenar y gestionar los datos de Resto. En ella se puede gestionar una lista de usuarios, productos y pedidos de un restaurante.

### Técnologias implementadas
- Node.js
- Express.js
- SQL
- Sequelize
- Nodemon
- JWT
- GIT para el control de versiones

## Prueba de la API
1.  Clonar o descargar el repositorio https://github.com/nicolasmarri/Api-Resto.git

2.  Crear la base de datos y ejecutar un motor de base de datos.

3.  Abrir terminal e instalar las dependencias del proyecto con 'npm install' para poder probar los endpoint.

4.  Ejecutar el comando 'npm start' para iniciar el servidor.   

5.  Usar alguna herramienta que nos permita probar los endpoint con sus respectivos metodos, como por ejemplo POSTMAN.

##  API Endpoints
1. CREAR EL USUARIO #### POST /api/user
     
2. INGRESAR COMO USUARIO #### POST /api/login

3. MODIFICAR EL ROL DE USUARIO A ADMINISTRADOR (solo admin) #### PUT /api/user/{id}
   
4. ELIMINAR UN USUARIO (SOLO ROL ADMIN) #### DELETE /api/user/{id}

5.  MOSTRAR PRODUCTOS PARA CUALQUIER ROL #### GET /api/product

6. CREAR UN PRODUCTO (SOLO ROL ADMIN) #### POST /api/product

7. MODIFICAR UN PRODUCTO (SOLO ROL ADMIN)  #### PUT /api/product/{id}

8. ELIMINAR UN PRODUCTO (SOLO ROL ADMIN) ### DELETE /api/product/{id}

