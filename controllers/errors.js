exports.pageNotFound = (req, res, next) => {
  console.log('Not Found Middleware')
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
    path: '/admin/404',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  })

}