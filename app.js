require('dotenv').config()
const path = require('path')
const express = require('express')
const errorsController = require('./controllers/errors')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))


app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(errorsController.pageNotFound)

app.listen(PORT, () => { 
  console.log(`Server running on port ${PORT}`)
})