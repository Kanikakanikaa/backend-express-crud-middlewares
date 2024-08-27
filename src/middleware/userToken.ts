const jwt=require('jsonwebtoken')

export const verifyToken=async(req:any,res:any,next:any)=>{
    // console.log("call")
    try {
        // console.log(req.headers.authorization)
        const token=req.headers.authorization;
        if (token) {
            const decoded = jwt.verify(token, 'your-secret-key');
            req.id = decoded;
            console.log(req.userId,decoded.userId)
            next();
        } else {
            return res.status(401).send({ message: 'token misssing in header' });
        }
    } catch (error) {   
             console.log(error)

        return res.status(400).send({ message: 'Unauthorized' });
    }
}