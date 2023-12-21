import express from "express";
import { updateUserController } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/update/:id",verifyToken, updateUserController);

export default router;
