const express=require('express')
const { OfferModel } = require('../model/offerModel')

const offerRoute=express.Router()

offerRoute.post("/createOffer",async(req,res)=>{
    try{
       const newData=new OfferModel(req.body)
        await newData.save()
        res.send("New Offer is Added")
    }
    catch(err){
        console.log(err)
    }
})

offerRoute.get("/",async(req,res)=>{
    try{
        const offerData=await OfferModel.find()
        res.send(offerData) 
    }
    catch(err){
        console.log(err)
    }
})

module.exports={offerRoute}