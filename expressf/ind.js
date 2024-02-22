
// app.listen(3001);
// function sum(n){
//     let ans=0;
//     for(let i=0;i<=n;i++){
//     ans=ans+i;
//     }
//     return ans;
// }
// app.get("/",function(req,res){
//     const n= req.query.n;
//     const a= sum(n);
// res.send("hi there your ans is "+a);
// })
const express= require("express");
const app=express();

app.use(express.json());
const user= [{
    name :"jake",
    kidneys:[{
        healthy:false
    }]
}]
app.get("/",function(req,res){
    
   
    let tothealthy=0;
    let totunhealthy=0;
    const x= user[0].kidneys;
    let totalkid=x.length;
    console.log(x);
    for( let i=0;i<user[0].kidneys.length;i++){
        if(user[0].kidneys[i].healthy)tothealthy++;
    }
    totunhealthy=x.length-tothealthy;
   
    res.json({
        totalkid,
        tothealthy,
        totunhealthy
    });
})
app.post("/",function(req,res){
    const ishealthy=req.body.ishealthy;
    
    user[0].kidneys.push({
        healthy:ishealthy
    })
       
   res.json({
    msg:"done"
   })
})
app.put("/",function(req,res){
    
    if(usernouk()){
    for(let i=0;i<user[0].kidneys.length;i++){
        user[0].kidneys[i].healthy=true;
    }
    res.json({})}
    else {
        res.status(411).json({
          msg:  "no unhealthy kidneys"
        });
        
    }
})
function usernouk(){
    let he=false;
    for(let i=0;i<user[0].kidneys.length;i++){
        if( user[0].kidneys[i].healthy ==false){
            he=true;
        }
    }
    return he;
}
app.delete("/",function(req,res){
    if(usernouk()){

    const newkid=[]
    for(let i=0;i<user[0].kidneys.length;i++){
        if(user[0].kidneys[i].healthy){
            newkid.push({
                healthy:true
            })
        }
    }
    user[0].kidneys=newkid;
    res.json({});}
    else {
        res.status(411).json({
          msg:  "no unhealthy kidneys"
        });
        
    }
})
app.listen(3000);
