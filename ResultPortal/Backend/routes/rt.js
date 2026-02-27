let express=require("express")
const {addstd,login} = require("../controlers/usercon")
let rt=new express.Router()
rt.post("/reg",addstd)
rt.post("/login",login)
module.exports=rt