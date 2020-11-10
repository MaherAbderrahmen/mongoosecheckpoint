const express = require('express')
const app = express()
const connectDB = require('./config/connectDB')
const router = require('./routes/person')

// middleware
app.use(express.json())

app.use("/persons", router) 

//connect DB
connectDB()




// Connection server
const port = process.env.PORT || 5000

app.listen(port, (error) => {
    error ? console.log("Connection failed") : console.log(`Server in running on port ${port}`)
})