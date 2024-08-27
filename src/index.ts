import routes from "./routes/index"

const express = require('express');
// const token=require('jsonwebtoken')
const app = express();
const port=8080;
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/",routes);    
 
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});