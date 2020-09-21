# hacktiv-animalLover-server

​
List of available endpoints:
​
- `POST /register`
- `POST /login`
- `GET /animals`
- `POST /favorites/:animalId`
- `GET /favorites`
- `DELETE /favorites/:id`

### POST /register

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "id": "integer",
  "email": "string"
}
```

### POST /login

Request:

- data:

```json
{
  "email": "string",
  "password": "string"
}
```

Response:

- status: 200
- body:
  ​

```json
{
    "id": "integer",
    "email": "string",
    "access_token": "jwt string"
}
```

### GET /animals

description: 
  get all animals from database

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
{
  "animals": [
    {
      "id": 1,
      "name": "Koala",
      "imageUrl": "https://a-z-animals.com/media/animals/images/470x370/koala9.jpg",
      "description": "Spends up to 80% of the time sleeping or resting!"
    }
  ]
}
```

### POST /favorites/:animalId

description: 
  add a animal to user favourite

Request:

- headers: access_token (string)
- params: 
  - animalId: "integer" required


Response:

- status: 201
- body:

```json
{
  "favorite": {
    "id": "integer",
    "animalId": "integer",
    "userId": "integer"
  }
}
```

### GET /favorites

description: 
  show current user favourite animals

Request:

- headers: access_token (string)

Response:

- status: 200
- body:

```json
{
  "favorites": [
    {
      "id": "integer",
      "userId": "integer",
      "animalId": "integer",
      "animal": {
        "id": "integer",
        "name": "string",
        "imageUrl": "string",
        "description": "string"
      }
    }
  ]
}
```
### DELETE /favorites/:id

description: 
  delete favorite animal

Request:

- headers: access_token (string)
- params: 
  - id: "integer" required

Response:

- status: 200
- body:

```json
{
  "message": "Successfully delete favorite animal"
}
```
