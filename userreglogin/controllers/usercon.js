const um = require("../models/usermodel")

let reg=async(req,res)=>{
    try{
        let obj=await um.findById(req.body._id)
        if(obj)
        {
            res.json({"msg":"with given email acc exists"})
        }
        else{
            let data=new um(req.body)
            await data.save()
            res.json({"msg":"reg done"})
        }

    }
    catch
    {
        res.json({"msg":"error in reg"})
    }
}

let login=async(req,res)=>{
    try{
       let data=await um.find(req.body) 
       if(data.length==0)
       {
        res.json({"msg":"check email or pwd"})
       }
       else{
        res.json({"msg":"login sucess"})
       }

    }
    catch{
           res.json({"msg":"error in login"})
    }
}

module.exports={login,reg}