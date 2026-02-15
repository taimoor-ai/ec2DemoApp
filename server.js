const express = require("express")
const app =express()


app.use("/",(req,res)=>{
      res.setHeader('Content-Type', 'text/html');
      res.send('<h1>this is Web Page from Ec2 Server</h1>');
})
app.listen(3000,()=>{
    console.log("server running on port 3000")
})