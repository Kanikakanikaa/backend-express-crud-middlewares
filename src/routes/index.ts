import { verifyToken } from "../middleware/userToken";
import userVaildation from "../middleware/userValidations";
import createUservalidation from "../validations/createUserValidator";
const router = require("express").Router();
const controller = require("../controller/index");


router.route("/user").get(verifyToken,controller.getUsers).post(verifyToken,createUservalidation,userVaildation,controller.addUser);
router.route("/").post(controller.loginUser);
router.route("/:id",verifyToken).put(controller.updateUser).delete(controller.deleteUser);

export default router

 