let mongoose=require("mongoose")
let express=require("express")
let cors=require("cors")
const rt = require("./routes/bookroutes")

mongoose.connect("mongodb://localhost:27017/v25hfs2booksdb").then(()=>{
    console.log("con ok")
})

let app=express()
app.listen(5000)
app.use(express.json())
app.use(cors())
app.use("/",rt)