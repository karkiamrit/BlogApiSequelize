const app=require('./app');
const dotenv=require('dotenv'); 
const sequelize=require('./config/database');


dotenv.config({path:'config/config.env'});

process.on('uncaughtException',()=>{
    console.log(`Error:${err.message}`);
    server.close(()=>{console.log('Server Closed')});
    process.exit(1); //will cause a crash and will end the process.
})

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is running at Port ${process.env.PORT}`);
});

process.on('unhandledRejection',err=>{
    console.log(`Error:${err.message}`);
    server.close(()=>{console.log('Server Closed')});
    process.exit(1); //will cause a crash and will end the process.
})