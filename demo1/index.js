let express=require("express")
let app=express()

app.get("/",(req,res)=>{
    res.send("welcome to express server")

})
app.get("/about",(req,res)=>{
    res.send("you are in about path")

})
app.listen(5000,()=>{
    console.log("server started at http://localhost:5000")
})