require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const router = require('./routes/routes')
const defaultData = require('./default')
const connectDB = require('./dbConn')

const app = express()
connectDB()



const port = process.env.PORT || 3500

if(process.env.NODE_ENV == 'production'){
    app.use(express.static('client/build'))
}

app.use(cors())
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', router)



app.listen(port, ()=>{
    console.log(`The server is running on port: ${port} `);
})

defaultData()