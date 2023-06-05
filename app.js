const express=require('express');
const app=express();
const userRoute=require('./routes/userRoute');
const sequelize=require('./config/database'); //connects to database
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/v1',userRoute);

sequelize.sync();

module.exports=app;

