// Importing required modules
import { ObjectId } from "mongodb";
import db from "../database/mongo.database.js";

// Function to get all live videos
const getLiveVideos = async () =>
  await db.collection("livevideos").find().toArray();

// Function to get a live video by ID
const getLiveVideoById = async (id) =>
  await db.collection("livevideos").findOne({ _id: new ObjectId(id) });

// Exporting the functions
export { getLiveVideos, getLiveVideoById };
