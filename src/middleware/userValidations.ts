import { validationResult } from "express-validator";

const userVaildation = (req: any, res: any, next: any) => {
  console.log("middleware called");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // return res.status(400).json({ errors: errors.array() });
    console.log(errors);
    const extractedErrors: any = [];
    errors.array().map((err) => extractedErrors.push({ message: err.msg }));
    return res.status(400).json({ errors: extractedErrors });
  }
  next();
};

export default userVaildation;
