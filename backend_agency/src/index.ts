import express from "express";
import userRouter from "./auth/route";
import dotenv from "dotenv"

dotenv.config();

const app=express();
app.use(express.json());

const port=process.env.PORT;

app.use('/auth',userRouter);


app.listen(port,()=>{
    console.log(`Server running on the port ${port}`);
})