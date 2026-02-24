let express=require("express")
let multer=require("multer")
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './updfiles')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix+"."+file.mimetype.split("/")[1])
  }
})
const upload = multer({ storage: storage })
let app=express()
app.listen(5000)
app.use(express.urlencoded({"extended":true}))
app.use("/imgs",express.static("./updfiles"))
app.post("/data",upload.single("img"),(req,res)=>{
    console.log(req.body)
    console.log(req.file)

    res.json({"msg":"data recived"})
})