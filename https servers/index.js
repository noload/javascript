const express = require("express");
const bodyParser = require("body-parser");
const app=express();
const port=3000;

app.use(bodyParser.json());

// app.get('/hello',function(req,res){
//     res.send("hello world.... hey i am vaibhav");
// })


// //user-info populate
// app.get('/user-info',function (req,res) {
//     res.json({
//         name:"vaibhav",
//         age:24
//     })
// })

app.post('/bodyDemo',function(req,res){

    console.log(req.body.message);

    res.send("hello vaibhav");
})

app.post('/conversion',(req,res)=>{
    console.log(req.headers["authorization"]);
    res.send({
        msg:2+2
    });
})

app.listen(port,function(){
    console.log("listening on port"+port);
})