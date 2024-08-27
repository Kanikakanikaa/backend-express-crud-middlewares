import { body} from "express-validator";
console.log("call validatores")

 const createUservalidation= [
    body('name').trim().not().isEmpty().withMessage("Name is required").isAlpha().withMessage("Name is not valid"),
    body('email').trim().not().isEmpty().withMessage("Email is required").isEmail().withMessage("Email is not valid"),
    // .isEmailNotInUse().withMessage("Email already exists"),
    body('phnNo').trim().not().isEmpty().withMessage("Phone number is required").isInt(),
    
    ]

export default  createUservalidation