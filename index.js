const express = require('express')
const app = express()

const bcrypt = require('bcryptjs')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
//const expressLayouts = require('express-ejs-layouts')
const initializePassport = require('./passport')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

/*
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

const users = []
//const article = []
*/
// Set Templating Engine
//app.use(expressLayouts)
//app.set('layout', './layouts/full-width')
app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

// Routes
app.use('/', require('./routes/index'));

app.listen(3000)

//app.listen(PORT, () => console.log(`Server running on port ${PORT}`));