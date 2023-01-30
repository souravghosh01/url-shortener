const express = require('express')
const connectDb = require('./models/connectDB')
const urlRoute = require ('./routes/link') 
const { getRedirected, getClicks } = require('./controllers/link')

const app = express()
const PORT = 5000


 connectDb('mongodb://127.0.0.1:27017/url-shortner').then(() =>
 console.log("Mongodb connected")
);

 app.use(express.json())

app.use('/',urlRoute)


  

app.listen(PORT,console.log(`server started at port no ${PORT}`))