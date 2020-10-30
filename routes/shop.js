const path = require('path')
const express = require('express')
const rootDir = require('../util/path')
const adminData = require('./admin')
const router = express.Router()


router.get('/', (req, res, next) => { 
  console.log('in the root page')
  // console.log('shod.js',adminData.products)
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'))
  const products = adminData.products
  res.render('shop', {
    prods: products,
    pageTitle: 'shop',
    path: '/',
    hasProducts: adminData.products.length > 0,
    activeShop: true,
    productsCSS: true
  })
})


module.exports = router