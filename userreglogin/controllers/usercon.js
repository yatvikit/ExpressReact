let um=require("../models/usermodel")
let bcrypt=require("bcrypt")
let jwt=require("jsonwebtoken")
let reg=async(req,res)=>{
    try
    {
        let obj=await um.findById(req.body._id)
        if(obj)
        {
            res.json({"msg":"acc exists with given email"})
        }
        else{
            let hashcode=await bcrypt.hash(req.body.pwd,10)
            let data=new um({...req.body,"pwd":hashcode})
            await data.save()
            res.json({"msg":"reg done"})

        }

    }
    catch{
        res.json({"msg":"error in reg"})
    }
}

let login=async(req,res)=>{
    try{
        let obj=await um.findById(req.body._id)
        if(obj)
        {
            let f=await bcrypt.compare(req.body.pwd,obj.pwd)
            if(f)
            {
                res.json({"token":jwt.sign({"_id":obj._id},"12345"),"name":obj.name})
            }
            else{
                res.json({"msg":"check pwd"})
            }

        }
        else{
            res.json({"msg":"check email"})
        }

    }
    catch{
        res.json({"msg":"error in login"})
    }
}
module.exports={login,reg}