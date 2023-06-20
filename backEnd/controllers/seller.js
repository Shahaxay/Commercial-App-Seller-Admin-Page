const Product=require('../models/product');
exports.getProducts=((req,res,next)=>{
    Product.findAll()
    .then(products=>{
        // console.log(products);
        res.json(products);
    })
    .catch(err=>console.log(err));
})

exports.postAddProduct=((req,res,next)=>{
    const obj=req.body;
    Product.create({price:obj.price,name:obj.name})
    .then(result=>{
        res.json({_id:result.id});
    })
    .catch(err=>console.log(err));
})

exports.deleteProduct=((req,res,next)=>{
    const prodId=req.params.productId;
    Product.findByPk(prodId)
    .then(product=>{
        return product.destroy();
    })
    .then(result=>{
        // console.log(result);
        res.json(result);
    })

})

