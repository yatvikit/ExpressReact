let mongoose=require("mongoose")
let booksch=new mongoose.Schema({
    "_id":Number,
    "title":String,
    "author":String,
    "price":String,
    "rt":Number
})
let bm=mongoose.model("book",booksch)
module.exports=bm