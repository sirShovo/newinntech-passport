# Prueba-Newinntech - API

Esta es una API para registrar usuarios y subir sus fotos.
Tiene integraciones con TypeScript, Mongoose, PassportJs, dotenv, express, etc.

Para instalar las dependencias es necesario el uso de `NodeJS` y `npm`.

**Install**

```sh
npm install
```

**Run**

```sh
Modo desarrollo
npm run dev

npm run start

Formato de código
npm run lint

Build del proyecto
npm run tsc
```

## `GET` /

Ruta base del proyecto, nos devuelve una vista que tiene la selección del login.

## `GET` /ping

Endpoint para validar la conexión de la API.

**Response**

```sh
pong
```

## `GET` /login

Nos lleva a la base del proyecto, con el motivo de mostrar la elección del inicio de sesión.

## `GET` /auth/google

Inicio de sesón con Google, si todo sale bien te redirecciona al perfil.

## `GET` /auth/facebook

Inicio de sesón con Facebook, si todo sale bien te redirecciona al perfil (no esta funcional por problemas de facebook).

## `GET` /auth/github

Inicio de sesón con Github, si todo sale bien te redirecciona al perfil.

## `GET` /profile

Ruta protegida que valida si existe un usuario, si no existe te redirecciona al login, de lo contrario te devuelve una vista con el perfil y te da acceso al resto de endpoints.

## `GET` /posts

Obtiene una lista de post de una api externa (solo por mostrar datos xd).

**Response**

```sh
[
  {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
  }...
]
```

## `GET` /posts

Obtiene una lista de post de una api externa (solo por mostrar datos xd).

**Response**

```sh
[
  message: "get all posts",
  data: {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
  }...
]
```

## `GET` /posts/:id

Obtiene un post por su identificador.

**Query params**
| Key | Value |
| ------ | ------ |
| id | { id } |
**Response**

```sh
{
  message: 'get post with id: {:id}'
  data: {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
  }
}
```

## `PUT` /posts/:id

Modifica un post y lo busca por su identificador. Tanto el title como el body no son requeridos, pero si debe de ir al menos uno de los dos.

**Query params**
| Key | Value |
| ------ | ------ |
| id | { id } |

**Body**

```sh
{
  "title"?: string,
  "body"?: string
}

```

**Response**

```sh
{
  message: 'post updated successfully'
  data: {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
  }
}
```

## `DELETE` /posts/:id

Elimina un post y lo busca por su identificador.

**Query params**
| Key | Value |
| ------ | ------ |
| id | { id } |

**Response**

```sh
{
  message: 'post deleted successfully'
  data: {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
  }
}
```

## `POST` /posts

Crea un post.

**Body**

```sh
{
  "title": string,
  "body": string
}

```

**Response**

```sh
{
  message: 'post created successfully'
  data: {
    "title": string,
    "body": string
  }
}
```

# Fuentes - API

- https://www.section.io/engineering-education/how-to-create-a-simple-rest-api-using-typescript-and-nodejs/

- https://www.youtube.com/watch?v=ZpY5KdGQvwI

- https://dev.to/joshuajee/nodejs-github-authentication-using-passportjs-and-mongodb-2lfd

- https://github.com/SamipPoudel58/nodejs-ts-google-oauth

- https://geshan.com.np/blog/2023/03/mongodb-docker-compose/
