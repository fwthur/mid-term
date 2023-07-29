// Importing required modules
import response from "../helpers/response.helper.js";
import { getLiveVideos, getLiveVideoById } from "../models/live_video.model.js";

// Function to get all live videos
const getAllVideos = async (req, res) => {
  try {
    // Fetch all live videos
    const liveVideos = await getLiveVideos();

    // If live videos are not found, return a failure response
    if (!liveVideos) {
      return response.failed(res, "Failed to get live videos", "failed");
    }

    // If live videos are found, return a success response
    return response.success(res, liveVideos, "success", "Live videos retrieved successfully");
  } catch (error) {
    // If an error occurs, return a failure response with the error message
    return response.failed(res, error.message, 500);
  }
};

// Function to get a live video by ID
const getVideoById = async (req, res) => {
  try {
    // Destructure id from req.params
    const { id } = req.params;

    // Fetch live video using the ID
    const liveVideo = await getLiveVideoById(id);

    // If live video is not found, return a failure response
    if (!liveVideo) {
      return response.failed(res, "Failed to get live video", "failed");
    }

    // If live video is found, return a success response
    return response.success(res, liveVideo, "success", "Live video retrieved successfully");
  } catch (error) {
    // If an error occurs, return a failure response with the error message
    return response.failed(res, error.message, 500);
  }
};

// Exporting the functions
export { getAllVideos, getVideoById };
