import express from "express";
import { listingController ,deleteListingController,updateListingController,getListingController,getListingsController} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, listingController);
router.delete("/delete/:id", verifyToken, deleteListingController);
router.post("/update/:id", verifyToken, updateListingController);
router.get("/get/:id", getListingController);
router.get("/get", getListingsController);

export default router;
