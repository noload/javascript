const express =require("express");
const port=3000;

const app=express();
const zod=require("zod");

const schema = zod.array(zod.number());

app.use(express.json());

app.post('/health-check',(req,res)=>{
    


    const kidneys=req.body.kidneys;
    const response=schema.safeParse(kidneys);

    res.send({
        response
    });


});

app.use(function(err,req,res,next){
    if(err){
    res.json({
        "message":"error a file"
    })
}
});

app.listen(port,()=>{
    console.log("listening on port"+port);
})