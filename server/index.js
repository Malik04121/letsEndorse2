const express=require('express')
const cors=require('cors')
const { connection } = require('./configuration/db')
const { offerRoute } = require('./route/offerRoute')

const app=express()

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome to Home page")
})

app.use("/offer",offerRoute)


app.listen(5800,async()=>{
    try{
       await connection
       console.log("Connected to db")
    }
    catch(err){
        console.log(err)
    }
})
