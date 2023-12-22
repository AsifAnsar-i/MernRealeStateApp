import express from "express";
import { updateUserController,deleteUserController,getUserListingController,getUserController } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/update/:id",verifyToken, updateUserController);
router.delete("/delete/:id",verifyToken, deleteUserController);
router.get("/listings/:id",verifyToken, getUserListingController);
router.get("/:id",verifyToken, getUserController);

export default router;
