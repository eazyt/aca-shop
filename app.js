require('dotenv').config()
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))


app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => { 
  console.log('Not Found Middleware')
  // res.sendFile(path.join(__dirname, 'views', '404.html'))
    // res.sendFile(path.join(__dirname, 'views', '404.html'))
  res.sendFile(path.join(__dirname, 'views', '404.html'))
  // res.send('Not FOUNDS')
  // next()
})

app.listen(PORT, () => { 
  console.log(`Server running on port ${PORT}`)
})