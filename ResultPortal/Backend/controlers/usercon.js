const um = require("../models/usermode")
let bcrypt=require("bcrypt")
let jwt=require("jsonwebtoken")

let addstd=async(req,res)=>{
    try{
        let arr=await um.find({$or:[{"email":req.body.email},{"phno":req.body.phno}]})
        if(arr.length>0)
        {
            res.json({"msg":"use diff email or phno"})
        }
        else{
            let pwdhash=await bcrypt.hash(req.body.pwd,10)
              let data=new um({...req.body,"pwd":pwdhash})
              await data.save()
              res.json({"msg":"registration done"})

        }
      
        

    }
    catch{
        res.json({"msg":"error in reg"})

    }
}

let login=async(req,res)=>{
    try{
        let pat=/^[0-9]{6}$/
        let uid=req.body.uid
        if(pat.test(uid))
        {
            let obj=await um.findById(uid)
            if(obj)
            {
                let f=await bcrypt.compare(req.body.pwd,obj.pwd)
                if(f)
                {
                    res.json({"token":jwt.sign({uid},"12345"),"name":obj.name,"role":obj.role})
                }
                else{
                    res.json({"msg":"check pwd"})
                }
            }
            else{
                res.json({"msg":"chek hno"})
            }

        }
        else{
            let arr=await um.find({$or:[{"email":uid},{"phno":uid}]})
            if(arr.length>0)
            {

let f=await bcrypt.compare(req.body.pwd,arr[0].pwd)
                if(f)
                {
                    res.json({"token":jwt.sign({uid},"12345"),"name":arr[0].name,"role":arr[0].role})
                }
                else{
                    res.json({"msg":"check pwd"})
                }

            }
            else{
                res.json({"msg":"check user id"})
            }

        }
   

    }
    catch{
        res.json({"msg":"error in login"})
    }
}

module.exports={addstd,login}