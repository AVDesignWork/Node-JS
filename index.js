const express = require('express')
const app = express()
const PORT = 3000
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

// Routes
//app.use('/', require('./routes/index'));

app.get('/', (req, res) =>{
  res.sendFile(__dirname + "/views/index.html")
})
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
