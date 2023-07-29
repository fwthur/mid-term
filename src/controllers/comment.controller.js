// Importing required modules
import { getAllCommentsByLiveVideo, insertComment } from "../models/comment.model.js";
import response from "../helpers/response.helper.js";

// Function to get comments by Live Video ID
const commentsByLiveVideo = async (req, res) => {
  try {
    // Destructure id from req.params
    const { id } = req.params;

    // Fetch comments using the Live Video ID
    const comments = await getAllCommentsByLiveVideo(id);

    // If comments are not found, return a failure response
    if (!comments) {
      return response.failed(res, "Failed to get comments", "failed");
    }

    // If comments are found, return a success response
    return response.success(res, comments, "success", "Comments retrieved successfully");
  } catch (error) {
    // If an error occurs, return a failure response with the error message
    return response.failed(res, error.message, 500);
  }
};

// Function to create a comment
const createComment = async (req, res) => {
  try {
    // Destructure id from req.params and body from req
    const { id } = req.params;
    const { body } = req;

    // Insert comment with provided body and Live Video ID
    const comment = await insertComment({ ...body, liveVideoId: id });

    // If comment is not created, return a failure response
    if (!comment) {
      return response.failed(res, "Failed to create comment", "failed");
    }

    // If comment is created, return a success response
    return response.success(res, comment, "success", "Comment created successfully");
  } catch (error) {
    // If an error occurs, return a failure response with the error message
    return response.failed(res, error.message, 500);
  }
};

// Export functions
export { commentsByLiveVideo, createComment };
