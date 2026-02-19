const bm = require("../models/bookmodel")

let addbook=async(req,res)=>{
    try{
        let data=new bm(req.body)
        await data.save()
        res.json({"msg":"book detailes added"})

    }
    catch{
        res.json({"msg":"error in storing data"})
    }
}
let getbooks=async(req,res)=>{
    try{
        let data=await bm.find()
        res.json(data)

    }
    catch{
        res.json({"msg":"error in getting data"})
    }
}

module.exports={addbook,getbooks}