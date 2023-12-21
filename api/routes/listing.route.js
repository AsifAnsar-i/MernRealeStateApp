import express from "express";
import { listingController ,deleteListingController,updateListingController,getListingController} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, listingController);
router.delete("/delete/:id", verifyToken, deleteListingController);
router.post("/update/:id", verifyToken, updateListingController);
router.get("/get/:id", getListingController);

export default router;
