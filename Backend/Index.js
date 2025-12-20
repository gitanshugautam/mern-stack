const express = require("express")
require("dotenv").config();
const app = express()
const port = process.env.PORT
app.get("/",(req, res)=>{
    res.send ("here this server run on port number 5005")
})
app.listen (port,()=>{
    console.log(`server is listening at port number http://localhost:${port}`)
})
