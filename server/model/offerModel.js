const mongoose=require("mongoose")

const offerSchema=mongoose.Schema({
    code:String,
    title:String,
    description:String,
    type:String,
    discount:Number,
    applicable:String,
    minOrderValue:Number,
    maxDiscount:Number,
    startDate:Date,
    expirationDate:Date,
    numberOfCustomer:String,
    totalCustomers:String,
    offersPerCustomer:String,
    usagePerCustomer:Number
})

const OfferModel=mongoose.model("offer",offerSchema)

module.exports={OfferModel}