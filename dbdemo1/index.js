let mongoose=require("mongoose")
let express=require("express")

mongoose.connect("mongodb://localhost:27017/v25hfs2demodb").then(()=>{
    console.log("con is ok")
}).catch(()=>{
    console.log("error in db con")
})

let empsch=new mongoose.Schema({
    "_id":Number,
    "name":String,
    "dept":String,
    "sal":Number,
    "gen":String
})
let em=mongoose.model("emp",empsch)

let app=express()
app.listen(5000)
app.use(express.json())

app.post("/add",(req,res)=>{
    let data=new em(req.body)
    data.save().then(()=>{
        res.json({"msg":"data stored"})

    }).catch(()=>{
        res.json({"msg":"error in storing the data"})
    })

})

app.get("/",(req,res)=>{
    em.find().then((data)=>{
        res.json(data)

    }).catch(()=>{
        res.json({"msg":"error in fetching data"})
    })
})