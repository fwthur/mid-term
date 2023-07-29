// Importing required modules and environment variables
import {
  MONGO_DBNAME,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_URI,
} from "../../env.js";
import mongoose from "mongoose";

// Connect to MongoDB using mongoose
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true, // Use the new MongoDB driver connection string parser
  dbName: MONGO_DBNAME, // Specify the database name
  user: MONGO_USERNAME, // Specify the username
  pass: MONGO_PASSWORD, // Specify the password
});

// Create a connection object
const db = mongoose.connection;

// Bind an error event listener to the connection
db.on("error", console.error.bind(console, "connection error:"));

// Bind an open event listener to the connection
db.once("open", () => {
  console.log("[db]: Connected to MongoDB");
});

// Export the connection object
export default db;
