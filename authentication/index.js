const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword="123456";

const app=express();
app.use(express.json());

const ALL_users=[
    {
    username:"vaibhav@gmail.com",
    password:"123",
    name:"vaibhav"
    },
    {
        username:"nilesh@gmail.com",
        password:"1234",
        name:"nilesh"
    },
    {
        username:"neeraj@gmail.com",
        password:"12345",
        name:"neeraj"
    }
];

function userExist(username,password) {
    let userPresent=false;
    ALL_users.forEach((user)=>{
        if(user.username==username && user.password==password){
            userPresent=true;
        }
    });
    return userPresent;
}

app.post("/signin",function (req,res) {
    const userName = req.body.username;
    const pass = req.body.password;
    const userExit =userExist(userName,pass);
    if (!(userExit)) {
        return res.status(403).json({
            msg:"User doesn't exist in our in memory db"
        });
    }

    var token=jwt.sign({username:userName},jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users",function (req,res) {
    const token= req.headers.authorization;
    try {
        const decoded = jwt.verify(token,jwtPassword);
        const username = decoded.username;
        res.json({
            users:ALL_users.filter((value)=>{
                if (value.username==username) {
                    return false
                }else{
                    return true
                }
            })
        })

    } catch (err) {
        return res.status(403).json({
            msg:"Invalid token",
        });
    }
});

app.listen(3000,function(){
    console.log("listing on port");
});