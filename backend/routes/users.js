import express from "express";
import { deleteUser, getAllUser, getSingleUser, updateUser } from "../controllers/userController.js";
const router = express.Router();


// update User
router.put("/:id", updateUser);
// delete User
router.delete("/:id", deleteUser);
// getSingle User
router.get("/:id", getSingleUser);
// getAllUser
router.get("/", getAllUser);


export default router;