const express = require('express')
const connectDb = require('./models/connectDB')
const urlRoute = require ('./routes/link') 
require('dotenv').config()

const app = express()
const PORT = 5000
const uri = process.env.MONGO_URI;

 connectDb(uri).then(() =>
 console.log("Mongodb connected")
);

 app.use(express.json())

app.use('/',urlRoute)


  

app.listen(PORT,console.log(`server started at port no ${PORT}`))