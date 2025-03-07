import express from "express";
import userRouter from "./auth/route";
import dotenv from "dotenv"
import cors from "cors";

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());

const port=process.env.PORT;

app.use('/auth',userRouter);


app.listen(port,()=>{
    console.log(`Server running on the port ${port}`);
})