const express=require('express');

const sellerController=require('../controllers/seller');

const route =express.Router();

route.get('/',sellerController.getProducts);

route.post('/add-product',sellerController.postAddProduct);

route.delete('/delete-product/:productId',sellerController.deleteProduct);

module.exports=route;