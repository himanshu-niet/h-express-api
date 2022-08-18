const express=require('express')
const bodyParser= require('body-parser')
require('dotenv').config()
const database=require('./config/database')
const Router = require('./router/Router.js');
const port=process.env.PORT

const app=express();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

//hiii
app.use('/api',Router)


app.get('/',(req,res)=>{
    res.json({message:"Server Running"})
})



app.listen(port,()=>{
    console.log(`running sever on ${port}`)
})