import { accessSecretToken } from "../helper";

const jwt=require('jsonwebtoken')

export const verifyToken=async(req:any,res:any,next:any)=>{
    // console.log("call")
    try {
        // console.log(req.headers.authorization)
        const token=req.headers.authorization;
        if (token) {
            const decoded = jwt.verify(token, accessSecretToken);
            console.log(req.body,"decode",decoded.email)

           if(req?.body?.email == decoded.email){
            console.log(req.email,"decode",decoded.email)
            next();
           }
           else{
            return res.status(401).send({ message: 'Invalid token' });
           }
        } else {
            return res.status(401).send({ message: 'token misssing in header' });
        }
    } catch (error) {   
             console.log(error)

        return res.status(400).send({ message: 'Unauthorized' });
    }
}