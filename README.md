# nuxt-blog

> nuxt-blog

## Build Setup


```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# Лабораторная работа 1:   
В веб-приложении разработана клиентская и серверная части. Используется технология Server-Side-Rendering. Приложение создано на базе фреймворка Nuxt.js.
Суть приложения блог путешествий. Имеется пользовательская часть, где имеется возможность просматривать посты и оставлять комментарии, и панель администратора, где имеется возможность создавать, редактировать, удалять посты. Также создавать новых администраторов. Часть администратора защищена от неавторизованных пользователей c помощью middleware, использутеся библиотека Express.
# Лабораторная работа 3:  
Аутентификация реализована c помощью пакетов jsonwebtoken и bcrypt. Также используется Passport.js с помощью его защищаются роуты и проверяется валидность токена. Обработана 401 ошибка. 
Все данные хранятся с ипользованием MongoDB. Работа с БД организована с помощью библиотеки Mongoose.    
Деплой:    
https://travel-blog-ssr.herokuapp.com - пользовательская часть      
https://travel-blog-ssr.herokuapp.com/admin - панель администратора     
Логин: admin    
Пароль: 123456     