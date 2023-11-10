const router = require('express').Router()
const productcontroller = require('./controller')

router.get('/product', productcontroller.index)
router.get('/view/:id', productcontroller.view)
router.post('/addproduct', productcontroller.addProduct)
router.delete('/deleteProduct/:id', productcontroller.deleteProduct)

module.exports = router;