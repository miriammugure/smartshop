import express from 'express';

const app = express();

app.get('/music', (req,res)=>{
    res.send("You have hit the home endpoint")
})
app.listen(3000,()=>{
    console.log("Application running on port 3000");
    
})