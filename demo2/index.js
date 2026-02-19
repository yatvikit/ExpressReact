let express=require("express")
let app=express()
let arr=[]
app.listen(5000)
app.use(express.json())
app.get("/",(req,res)=>{
    res.json(arr)
})
app.get("/data",(req,res)=>{
    res.json({"data":"collect data"})

})

app.get("/search/:id",(req,res)=>{
    console.log(req.params.id)
    res.json({"msg":"this is search results"})
})
app.post("/add",(req,res)=>{
    arr.push(req.body)
    res.json({"msg":"data added"})
})