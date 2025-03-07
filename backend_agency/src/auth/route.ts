import { Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const userRouter = Router();
const client = new PrismaClient();
const jwtSec = process.env.JWT_SECRET || "";

userRouter.post("/signin", async (req: Request, res: Response): Promise<any> => {
    try {
        const token = req.headers.authorization?.split(" ")[1]; // ✅ Fixed token split

        if (token) {
            try {
                jwt.verify(token, jwtSec);
                return res.status(400).json({ message: "User already signed in" });
            } catch (error) {
                return res.status(401).json({ message: "Signin JWT expired" });
            }
        }

        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const findUser = await client.user.findUnique({
            where: { email },
        });

        if (!findUser) {
            return res.status(404).json({
                message: "User with this email does not exist. Try signing up.",
            });
        }

        const isPassword = await bcrypt.compare(password, findUser.password);
        if (!isPassword) {
            return res.status(401).json({ message: "Incorrect password" });
        }

        const newToken = jwt.sign({ userId: findUser.id, email: findUser.email }, jwtSec, {
            expiresIn: "24h", // ✅ Fixed expiry format
        });

        return res.json({ token: newToken });

    } catch (error) {
        console.error("Error during signin:", error); // ✅ Log error properly
        return res.status(500).json({
            message: "Error while signing in! Try again",
            error: error instanceof Error ? error.message : "Unknown error"
        });
    }
});

userRouter.post("/signup",async(req:Request,res:Response):Promise<any>=>{
    try{
        const {fullname,email,password}=req.body;
        if(!fullname||!email||!password)
        {
            console.log("Inputs required");
            
            return res.status(400).json({
                message:"All input fields are required"
            })
            
        }
        const userExists=await client.user.findUnique({
            where:{
                email
            }
        })

        if(userExists)
        {
            return res.status(409).json({
                message:"User with this email already exists with you! Try signin"
            })
        }

        // in this 10 is the salt rounds 
        const hashedPassword=await bcrypt.hash(password,10);

        const user=await client.user.create({
            data:{
                fullname,
                email,
                password:hashedPassword
            }
        })

        const token= jwt.sign({userId:user.id,email:user.email},jwtSec,{
            expiresIn:"24hr"
        });

        // this will send the response as the user id and the token that we are generating 
        res.json({
            token
        })

    }catch(e:any)
    {
        console.log("Error while siginup",e);
        return res.status(500).json({
            message:"Error during signup",
            error:e.message
        })
    }
})

export default userRouter;
