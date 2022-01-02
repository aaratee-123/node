const express=require('express');
const app=express()
app.set('view engine', 'ejs');
// app.get('/profile/:name',function(req,res){
//     res.sendFile(__dirname+"views")
// });
app.get("/profile/:name",(req,res)=>{
    console.warn(req.params.name)
    res.render('profile',{name:req.params.name});

})

app.listen(3000,"localhost",()=>{
    console.log("port listen 3000")
})