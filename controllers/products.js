const products = []

exports.getAddProduct = (req, res, next) => {
  console.log('i\'m in the add-product')
  // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  })
}

exports.postAddProduct = (req, res) => {
  console.log('in the post products')
  // console.log(req.body)
  products.push({
    title: req.body.title
  })
  res.redirect('/')
}

exports.getProducts = (req, res, next) => {
  console.log('in the root page/get products')
  // const products = adminData.products
  res.render('shop', {
    prods: products,
    pageTitle: 'shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productsCSS: true
  })
}

