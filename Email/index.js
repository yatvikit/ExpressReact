let express=require("express")
let nodemailer=require("nodemailer")
let app=express()
app.listen(5000)

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use true for port 465, false for port 587
  auth: {
    user: "zentroxtom@gmail.com",
    pass: "mqjddgbjjgfjkjhztj",
  },
});


app.get("/sendemail",async(req,res)=>{
    try{

    let info=await transporter.sendMail({
    from: '"Maddison Foo Koch" <zentroxtom@gmail.com>',
    to: "gupthasai536@gmail.com,ckakadiya353@rku.ac.in",
    subject: "Test e-mail",
    //text: "Hello world?", // Plain-text version of the message
    html: "<h1 style='color:red'>Welcome To ABC world </h1><b>Hello world?</b>", // HTML version of the message
  });
  res.json(info)

    }
    catch
    {
        res.json({"msg":"error in sending email"})
    }
})