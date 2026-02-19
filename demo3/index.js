let express=require("express")
let mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/v25hfs2stddb").then(()=>{
    console.log("con ok")
}).catch(()=>{
    console.log("error in con")
})
let stdsch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "dept":String,
    "gen":String,
    "marks":Number
})
let sm=mongoose.model("std",stdsch)
let app=express()
app.listen(5000)
app.use(express.json())
/*app.post("/add",(req,res)=>{
    sm.findById(req.body._id).then((obj)=>{
        if(obj)
        {
            res.json({"msg":"with given id acc exists"})
        }
        else{
            let data=new sm(req.body)
            data.save().then(()=>{
                res.json({"msg":"std record added"})
            }).catch(()=>{
                  res.json({"msg":"error in storing data"})
            })


        }

    }).catch(()=>{
        res.json({"msg":"error in storing data"})
    })
})*/

app.post("/add",(req,res)=>{
    let data=new sm(req.body)
    data.save().then(()=>{
        res.json({"msg":"record added"})

    }).catch(()=>{
        res.json({"msg":"error in adding record"})

    })
})

app.get("/",(req,res)=>{
    sm.find().then((data)=>{
        res.json(data)

    }).catch(()=>{
        res.json({"msg":"error in fetching data"})
    })
})
app.get("/search/:id",(req,res)=>{
    sm.findById(req.params.id).then((obj)=>{
        res.json(obj)

    }).catch(()=>{
        req.json({"msg":"error in searching"})
    })
})

app.get("/search/:col/:val",(req,res)=>{
    sm.find({[req.params.col]:req.params.val}).then((data)=>{
        res.json(data)

    }).catch(()=>{
        res.json({"msg":"error in searching"})
    })
})