const express=require("express");
const rateLimiter=require("./rateLimiter");
const app=express();
const port=3000;

app.use(express.json());

app.use(rateLimiter); // rate Limiter Middleware

app.get("/",(req,res)=>{
    res.send("API is Working");
});

app.get("/data",(req,res)=>{
    res.json({
        message: "You accessed protected data successfully."
    });
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});