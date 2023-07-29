import { Router } from "express";
import validator from "../middlewares/validator.middleware.js";
import { CommentValidator } from "../validators/_index.validator.js";
import {
  commentsByLiveVideo,
  createComment,
  productByLiveVideo,
  getAllVideos,
  getVideoById,
} from "../controllers/_index.controller.js";

const router = Router();

// Get all live videos
router.get("/live_videos", getAllVideos);

// Get Detail Live Video by ID
router.get("/live_video/:id", getVideoById);

// Get comments by live video
router.get("/live_video/:id/comments", commentsByLiveVideo);

// Get products by live video
router.get("/live_video/:id/products", productByLiveVideo);

// Create comment
router.post(
  "/live_video/:id/comment",
  validator(CommentValidator.createComment, "body"),
  createComment
);

export default router;
