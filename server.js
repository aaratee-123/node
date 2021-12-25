
// serve localhost:8000
const http=require("http")
const server=http.createServer("/kiya",(req,res)=>{
    res.end("Hello! I have competed my javascript and continue node.js")
});
server.listen(8000,"localhost",()=>{
    console.log("listening to the port number,8000");
});

// "/kiya is a router"