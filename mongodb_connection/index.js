const express=require("express");
const jwt = require("jsonwebtoken");
const mongoose=require("mongoose");
const jwtPassword = "123456";

const app=express();
app.use(express.json());

//connecting to mongo db
mongoose.connect("mongodb+srv://notesafe:vaibhav%40123K@cluster0.fsxrugd.mongodb.net/userappnew")


//defining schema
const User = mongoose.model('Users',
{name:String,email:String,password:String});


app.post("/signup", async function (req,res) {
    const username = req.body.username;
    const password =  req.body.password;
    const name = req.body.name;

    const userExist =  await User.findOne({email:username});

    if (userExist) {
        res.status(404).json({
            msg:"user already exist try with another username"
        })
    }

    const user=new User({
        name:name,
        email:username,
        password:password
    });
    user.save();

    res.status(200).json({
        msg:"user created successfully"
    })

})



app.listen(3000,function () {
    console.log("listening on port");
})
