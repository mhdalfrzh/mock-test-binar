# mock-test-binar

## Soal
1. Apakah Kegunaan JSON pada REST API?

Jawab : JSON (Javascript Object Notation) adalah sebuah format data yang digunakan untuk pertukaran dan penyimpanan data. Pada REST API, JSON digunakan sebagai format untuk bertukar data antara client dan server karena JSON memiliki struktur data yang mudah dibaca sehingga memudahkan integrasi antar sistem.

2. Jelaskan bagaimana REST API bekerja

Jawab : REST API adalah suatu arsitektur untuk komunikasi antar sistem yang berbasis pada prinsip-prinsip tertentu. REST API bekerja menggunakan permintaan HTTP seperti GET, POST, PUT, dan DELETE. Ketika client mengirim permintaan HTTP ke server, maka server akan memproses permintaan tersebut dan mengirimkan respons kembali kepada client. Setiap metode memiliki makna dan tujuan tertentu. Misalnya, GET digunakan untuk mengambil data, POST untuk membuat data baru, PUT untuk memperbarui data, dan DELETE untuk menghapus data.

## User API

Link Documentation : https://documenter.getpostman.com/view/16896956/2s9YeK2pVU

Link Deploy : Belum berhasil dideploy

### Register User

Endpoint : POST /register

Request Body :

```json
{
  "email": "marselino@gmail.com",
  "pin": 010207
}
```

### Login user

Endpoint : POST /login

Request Body :

```json
{
  "email": "marselino@gmail.com",
  "pin": 010207
}
```

## To Do List API

### Get todo list

Endpoint : GET /todo

Headers :
- Authorization : Token

### Add todo list

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

### Update todo list

Endpoint : PUT /todo/:id

Headers :
- Authorization : Token

```json
{
  "content" : "belajar frontend",
  "isDone" : false
}
```
### Delete todo list

Endpoint : DELETE /todo/:id
Headers :
- Authorization : Token