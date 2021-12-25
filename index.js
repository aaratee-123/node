// const express=require('express');
// const app = express()
// app.get("/",(req,res)=>{
//     // res.send("hello word")
//     res.json({massage:"API is working....."})
// })
// app.listen(3000,()=>{
//     console.log("the port is 3000")
// })
// dynamic routes
var express = require('express');
var app = express();

app.get('/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});
app.listen(8000);