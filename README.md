# mock-test-binar

1. Apakah Kegunaan JSON pada REST API?
   Jawab :

2. Jelaskan bagaimana REST API bekerja
   Jawab :

## Register User

Endpoint : POST /register

Request Body :

```json
{
  "email": "marselino@gmail.com",
  "pin": 010207
}
```

## Login user

Endpoint : POST /login

Request Body :

```json
{
  "email": "marselino@gmail.com",
  "pin": 010207
}
```

## Get todo list

Endpoint : GET /todo

Headers :
- Authorization : Token

## Add todo list

Endpoint : POST /todo

Headers :
- Authorization : Token

Request Body :

```json
{
  "content" : "belajar backend",
  "isDone" : false
}
```

## Update todo list

Endpoint : PUT /todo/:id

Headers :
- Authorization : Token

```json
{
  "content" : "belajar frontend",
  "isDone" : false
}
```
## Delete todo list

Endpoint : DELETE /todo/:id
Headers :
- Authorization : Token