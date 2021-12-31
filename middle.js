const express=require('express');
const app=express()
const middleware=function(req,res,next){
    console.log("hello my middleware")
    next();
} 
app.use(middleware)
app.get('/about',middleware,function(req,res){
    console.log("hello world!")
    res.send("you visit about page")
});
app.listen(3000,"localhost",()=>{
    console.log("port listen 3000")
})