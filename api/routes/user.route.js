import express from "express";
import { updateUserController,deleteUserController,getUserListingController } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/update/:id",verifyToken, updateUserController);
router.delete("/delete/:id",verifyToken, deleteUserController);
router.get("/listings/:id",verifyToken, getUserListingController);

export default router;
