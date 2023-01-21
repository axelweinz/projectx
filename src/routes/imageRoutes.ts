import { Router } from "express";
import imageController from "../controllers/imageController";
import validateRequest from "../middleware/validation";
import generateImagesRequest from "../requests/imageRequests/generateImagesRequest";
const router = Router();

router.post(
  "/images",
  validateRequest(generateImagesRequest, "body"),
  imageController.generateImages
);

module.exports = router;
