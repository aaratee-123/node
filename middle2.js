const express=require('express');
const app=express()
const middleware=function(req,res,next){
    console.warn("current route is")
    next()
}
app.use(middleware)
app.get('/',function(req,res){
    res.send("you visit home page")
});
app.get('/login',function(req,res){
    res.send("you visit login page")
});
app.get('/about',function(req,res){
    res.send("you visit about page")
});
app.get('/signin',function(req,res){
    res.send("you visit signin page")
});
app.listen(3000,"localhost",()=>{
    console.log("port listen 3000")
})