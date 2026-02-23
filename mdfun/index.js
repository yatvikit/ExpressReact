let express=require("express")
let app=express()
app.listen(5000)
let fun1=(req,res,next)=>{
    res.write("mid-1")
    next()
}
let fun2=(req,res,next)=>{
    res.write("mid-2")
       next()
}
let fun3=(req,res,next)=>{
    res.write("mid-3")
       next()
}
let fun4=(req,res,next)=>{
    res.write("mid-4")
       next()
}
app.get("/data",fun2,fun3,fun1,(req,res)=>{
    res.end("get req done")
})

app.post("/data",fun4,fun3,fun1,(req,res)=>{
    res.end("post req done")
})