let express=require("express")
const { addbook, getbooks } = require("../controllers/bookscont")
let rt=new express.Router()
rt.post("/add",addbook)
rt.get("/",getbooks)

module.exports=rt