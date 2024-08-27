
import db from "../connection"
const jwt=require('jsonwebtoken')
const getUsers = async (req: Request, res: Response) => {
    const query = "SELECT * FROM UserEntities";
    try {
        const [rows]:any = await db.query(query);
        console.log(rows);
        return res.json();
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};
const addUser=async(req:any,res:any)=>{
    try {
        console.log(req.body)
    if(req.body.name && req.body.email && req.body.phnNo){  
        const query="INSERT INTO UserEntities (id,name, email, phnNo) VALUES ('"+req.body.id+"','"+req.body.name+"','"+req.body.email+"','"+req.body.phnNo+"')";
        const [rows, fields]:any =await db.query(query);
        console.log(fields,"fields")
        return res.status(200).send(rows);   
    }
} catch (error:any) {
    console.log(error.sqlMessage,"sql error",error.sqlMessage.fields)
    return res.status(400).send({message:"All fields are required"});
}
}
const updateUser=async(req:any,res:any)=>{
    try {
        console.log(req.body)
    if(req.body.id){  
        const query="update UserEntities set  id='"+req.body.id+"',name='"+req.body.name+"', email='"+req.body.email+"', phnNo='"+req.body.phnNo+"'  where id='"+req.body.id+"'"
        const [rows]:any =await db.query(query);
        return res.status(200).send(rows);   
    }
} catch (error:any) {
    console.log(error.sqlMessage,"sql error",error.sqlMessage.fields)
    return res.status(400).send({status:400,message:error.sqlMessage});
}
}
const deleteUser=async(req:any,res:any)=>{
    try {
        // console.log(req.params.id,"id")
    if(req.params.id){  
        const query="delete from  UserEntities  where id='"+req.params.id+"'"
        const [rows,fields]:any =await db.query(query);
        console.log(fields,"fields",rows)
        if (rows.length === 0) {
            res.json({ message: "No records found" });
        } else {
            res.json(rows);
        }    }
} catch (error:any) {
    console.log(error.sqlMessage,"sql error",error.sqlMessage.fields,error)
    return res.status(400).send({status:400,message:error.sqlMessage});
}
}

const loginUser=async(req:any,res:any)=>{
    try {
        if(req.body.email && req.body.name){
        const query = "SELECT email FROM UserEntities where email= '"+req.body.email+"'";
            const [rows]:any = await db.query(query);
            console.log(rows)
            if(rows?.length>0){
        const token:string = jwt.sign({ userId:rows.id }, 'your-secret-key', {
            expiresIn: '1h',
            });
          return res.json({token:token})
        } 
        else{
            res.status(400).send({message:"User not found"})
        }
    }
    } catch (error) {
        res.status(400).send({message:error})

    }
    
}
module.exports={
    getUsers,
    addUser,
    updateUser,deleteUser,loginUser
}