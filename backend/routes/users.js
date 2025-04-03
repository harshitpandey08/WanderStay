import express from "express";
import { deleteUser, getAllUser, getSingleUser, updateUser } from "../controllers/userController.js";

const router = express.Router();

import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";


// update User
router.put("/:id", verifyUser, updateUser);
// delete User
router.delete("/:id", verifyUser, deleteUser);
// getSingle User
router.get("/:id", verifyUser, getSingleUser);
// getAllUser
router.get("/", verifyAdmin, getAllUser);


export default router;