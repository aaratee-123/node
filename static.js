const express=require('express');
const app=express();
const path=require('path');

app.use(express.static(__dirname+'/public'));
// app.use(express.static(__dirname+'/images'));
app.use("/myimages",express.static(path.join(__dirname,"images")))

app.get("/",function(req,res){
    res.send("Get is called");
})
app.listen(3000);