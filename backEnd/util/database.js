const {Sequelize}=require('sequelize');

const sequelize=new Sequelize('commercial-db','root','sweetualsubaby',{dialect:'mysql',host:'localhost'});

module.exports=sequelize;