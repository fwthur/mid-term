// Importing from comment.controller.js
import { createComment, commentsByLiveVideo } from "./comment.controller.js";

// Importing from product.controller.js
import { productByLiveVideo } from "./product.controller.js";

// Importing from live_video.controller.js
import { getAllVideos, getVideoById } from "./live_video.controller.js";

// Exporting all functions
export {
  createComment,
  commentsByLiveVideo,
  productByLiveVideo,
  getAllVideos,
  getVideoById,
};
