## Proyecto Delilah Restó
Delilah Restó es una API que permite la conexión con una base de datos MySQL para almacenar y gestionar los datos de Resto. En ella se puede gestionar una lista de usuarios, productos y pedidos de un restaurante.

### Técnologias implementadas
- Node
- Express
- Mysql2
- Sequelize
- Nodemon
- Jsonwebtoken-
- GIT para el control de versiones

## Prueba de la API
1.  Clonar o descargar el repositorio https://github.com/nicolasmarri/Api-Resto.git

2.  Crear la base de datos y ejecutar un motor de base de datos.

3.  Abrir terminal e instalar las dependencias del proyecto con 'npm install' para poder probar los endpoint.

4.  Ejecutar el comando 'npm start' para iniciar el servidor.

El mensaje será:

api-resto@1.0.0 start D:\Escritorio\api-resto
node src/index.js
Executing (default): SELECT 1+1 AS result
connected

5.  Usar alguna herramienta que nos permita probar los endpoint con sus respectivos metodos, como por ejemplo POSTMAN.

##  API Endpoints

1. CREAR EL USUARIO 

#### POST localhost:3000/api/user
Ejemplo:
body
{
    "user":"JuanPerez",
    "email":"juanperez89@gmail.com",
    "password":"juan123",
    "name":"Juan",
    "phone":"3512654879",
    "address":"Av. 9 de Julio 256"
}
Response
{ 
    status: 'user created' 
}
     
2. INGRESAR COMO USUARIO 

#### POST localhost:3000/api/login
Si el usuario está registrado:
Body
{
    "email":"juanperez89@gmail.com",
    "password":"juan123"
}
Response
{
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NzE5NzYyMywidXNlciI6Ikp1YW5QZXJleiIsIm5hbWUiOiJKdWFuIiwiZW1haWwiOiJqdWFucGVyZXo4OUBnbWFpbC5jb20iLCJwaG9uZSI6IjM1MTI2NTQ4NzkiLCJhZGRyZXNzIjoiQXYuIDkgZGUgSnVsaW8gMjU2IiwicGFzc3dvcmQiOiJqdWFuMTIzIiwicm9sIjoidXNlciJ9.B8dkj-WipDn6DFT-ISRUSZwkdzIrinpEZHrSWirWCV8"
}

Si el usuario no está registrado:
Response
{
    "error": "invalid credentials"
}

3. MODIFICAR EL ROL DE USUARIO A ADMINISTRADOR (solo admin) 

#### PUT localhost:3000/api/user/{id}
Si el usuario tiene rol de administrador

Headers
access-token (Ingresar Token)

Body
{
    "rol":"admin"
}

Response
{
    "status": "rol updated"
}

Si el usuario no tiene rol de administrador
Response
{ error: 'Unauthorized' }

   
4. ELIMINAR UN USUARIO (SOLO ROL ADMIN)

 #### DELETE localhost:3000/api/user/{id}

Si el usuario tiene rol de administrador

Headers
access-token (Ingresar Token)

Response

{
    "status": "user deleted"
}

Si el usuario no tiene rol de administrador

Response
{
    error: 'user not granted'
}


5.  MOSTRAR PRODUCTOS PARA CUALQUIER ROL 

#### GET localhost:3000/api/product

Si tiene rol de usuario o administrador

Headers
access-token (Ingresar Token)

Response

[
    {
        "id": 1,
        "description": "Lomo al champignon con papas a la crema",
        "price": "$ 300"
    },
    {
        "id": 2,
        "description": "tallarines a la pomarola",
        "price": "$ 250"
    },
    {
        "id": 3,
        "description": "Milanesa a la napolitana con papas fritas",
        "price": "$ 300"
    }
]

6. CREAR UN PRODUCTO (SOLO ROL ADMIN) 

#### POST localhost:3000/api/product

Si el usuario tiene rol de administrador

Headers
access-token (Ingresar Token)

Body
{
    "description":"tarta de chocolate",
    "price":"$300"
}

Response

{
    "status": "product created"
}

Si el usuario no tiene rol de administrador

Response

{
    error: 'Unauthorized'
}

7. MODIFICAR UN PRODUCTO (SOLO ROL ADMIN) 

 #### PUT localhost:3000/api/product/{id}

 Si el usuario tiene rol de administrador

Headers
access-token (Ingresar Token)

Body

{
    "description":"tarta de chocolate",
    "price":"$250"
}

Response

{ 
    status: 'product updated'
}

Si el usuario no tiene rol de administrador

Response

{
    error: 'Unauthorized' 
}


8. ELIMINAR UN PRODUCTO (SOLO ROL ADMIN)

 ### DELETE localhost:3000/api/product/{id}

 Si el usuario tiene rol de administrador

Headers
access-token (Ingresar Token)

Response

{
    status: 'product deleted'
}

Si el usuario no tiene rol de administrador

Response

{
     error: 'Unauthorized'
}

9. CREAR UNA ORDEN 

### POST localhost:3000/api/order

Si tiene rol de usuario o administrador

Headers
access-token (Ingresar Token)

Body

{
    "status":"Nuevo",
    "description":"Tarta de chocolate",
    "payment_method":"Efectivo",
    "address":"Guemes 85",
    "product_id":"4"
}

Response

{
    status: 'order created'
}

10. MODIFICAR EL ESTADO DE UNA ORDEN (SOLO ROL ADMIN)

### PUT localhost:3000/api/order/{id}

Si el usuario tiene rol administrador

Headers
access-token (Ingresar Token)

Body

{
    "status":"Pendiente"
}

Response

{
    status: 'order updated'
}

Si el usuario no tiene rol administrador

Response

{
    error: 'Unauthorized'
}

11. ELIMINAR UNA ORDEN (SOLO ROL ADMINISTRADOR)

### DELETE localhost:3000/api/order/{id}

Si el usuario tiene rol administrador

Headers
access-token (Ingresar Token)

Response

{
    status: 'order deleted'
}

Si el usuario no tiene rol administrador

Response

{
    error: 'Unauthorized'
}

