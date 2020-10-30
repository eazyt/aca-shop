require('dotenv').config()
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))



app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => { 
  res.status(404).send('<h1>Page Not Found</h1>')
  next()
})

app.listen(PORT, () => { 
  console.log(`Server running on port ${PORT}`)
})