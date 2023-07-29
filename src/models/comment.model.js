// Importing required modules
import db from "../database/mongo.database.js";

// Function to get all comments by live video ID
const getAllCommentsByLiveVideo = async (liveVideoId) =>
  await db.collection("comments").find({ liveVideoId }).toArray();

// Function to insert a new comment
const insertComment = async (comment) =>
  await db.collection("comments").insertOne(comment);

// Exporting the functions
export { getAllCommentsByLiveVideo, insertComment };
