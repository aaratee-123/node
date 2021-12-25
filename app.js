// const { response } = require("express")
// const express=require("express")
// const app=express()
// // app.get(route,callback)
// app.get("/",(req,res)=>{
//     res.send("hello world from the express")

// })
// app.listen(8000,()=>{
//     console.log("listening the port at 8000")
// })

// var express = require('express');
// var router = express.Router();

// router.get('/', function(req, res){
//    res.send('GET route on things.');
// });
// router.post('/', function(req, res){
//    res.send('POST route on things.');
// });

//export this router to use in our index.js

var express = require('express');
var app = express();

app.get('/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});
app.listen(3000);