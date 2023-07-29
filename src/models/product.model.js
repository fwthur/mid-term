// Importing required modules
import db from "../database/mongo.database.js";

// Function to get products by live video ID
const getCommentsByLiveVideoId = async (liveVideoId) =>
  await db.collection("products").find({ liveVideoId }).toArray();

// Exporting the function
export { getCommentsByLiveVideoId };
