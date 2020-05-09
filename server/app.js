const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require ('mongoose')
const authRoutes = require('./routes/auth.routes')
const passport = require('passport')
const passportStrategy = require('./middleware/passport-strategy')
const postRoutes = require('./routes/posts.routes')
const commentRoutes = require('./routes/comments.routes')
const keys = require('./keys')
const app = express()


mongoose.connect(keys.MONGO_URI)
    .then(() => console.log('MongoDB connected...'))
    .catch(error => console.error(error))

app.use(passport.initialize())
passport.use(passportStrategy)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/comments', commentRoutes)

module.exports = app

