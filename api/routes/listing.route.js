import express from "express";
import { listingController ,deleteListingController} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, listingController);
router.delete("/delete/:id", verifyToken, deleteListingController);

export default router;
