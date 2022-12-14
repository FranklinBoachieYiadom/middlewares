const express = require ("express");
const userRouter = require ("./routes/users.route")
const {globalMiddleware}=require ("./middlewares/globalMiddleware");

const app = express()

app.use(globalMiddleware);

app.get("/",(req,res)=>{
    res.status(2000).send("Welcom to my Server");
})
app.use("/users",userRouter);


app.listen(4000,(err)=>{
    console.log("App is working perfectly on port number 4000");
})