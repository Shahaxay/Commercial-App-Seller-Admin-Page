const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const sequelize=require('./util/database');
const sellerRoute=require('./routes/seller');

const app=express();

app.use(bodyParser.json({extended:false}));
app.use(cors());

app.use(sellerRoute);

sequelize.sync()
.then(result=>{
    app.listen(3000,()=>console.log("listening..."));
})
.catch(err=>console.log(err));
