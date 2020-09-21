# Phase 2 - Live Code Final

## AnimalLover
Pada LiveCode kali ini kalian akan membuat sebuah website yang dapat menampilkan list hewan-hewan. Kalian dapat menambahkan hewan tersebut ke dalam list menu favorite.

### Summary

- -10 Point jika Tidak SPA, membutuh refresh untuk menjalankan salah satu/semua fitur
- -20 tidak menggunakan sequelize n postgres atau tidak menggunakan project hasil vue cli
- -5 tidak memberikan environtment variables beserta valuenya jika ybs menggunakan env
- -10 using alert()
- -2 routing tidak di protect (misal sudah login, masih bisa ke /login, belum login bisa ke form add post), cara student protect routes bebas

Silahkan cek contoh demo aplikasi pada link berikut: [hacktiv_animal](https://streamable.com/rulrkj)

## Release 0 - Authentication

### Server - Register
- Lakukan register sesuai api-doc.md

### Server - Login
- Lakukan login sesuai api-doc.md

### Client - Login & Logout
- jika sudah login, kalau direfresh tidak harus login lagi
- buatlah routing dan views untuk form login
- jika login berhasil maka akan ke routing yang akan menampilkan semua animal yang ada di database(namun karena kita belum ada animal  sama sekali, release 1 akan membahas add animal terlebih dahulu)

NOTES: REGISTER CLIENT TIDAK PERLU ADA


## Release 1 - Fetch Animals 

### Server
- Lakukan Fetch animals sesuai api-doc.md
- data animals bisa di seeding sesuai dengan data json yang di berikan

### Client
- buatlah routing di client untuk menampilkan list animals (contoh : '/')

## Release 2 - Fetch Favorites

### Server
- Lakukan Fetch favorites sesuai api-doc.md

### Client
- buat juga routing untuk menampilkan list favorites (contoh : '/favorites')

## Release 3 - Add To Favorite

### Server
- Lakukan add to favorites sesuai api-doc.md

### Client
- integrasi tombol add to favourite di card animal yang muncul di halaman awal
- pastikan website kalian reaktif (jika berhasil menambah favourite maka list favorite animal user akan bertambah otomatis di client)


## Release 4 - Delete Favorite

### Server
- Lakukan delete favorites sesuai api-doc.md

### Client
- integrasi tombol delete di list favorites
- pastikan website kalian reaktif (jika berhasil delete favourite maka list favorite animal user akan berkurang tanpa harus di refresh)
