import dotenv from "dotenv";
dotenv.config();

export const {
  APP_PORT = 8000,
  APP_HOSTNAME = "localhost",
  MONGO_URI = "mongodb://localhost:27017",
  MONGO_PORT,
  MONGO_DBNAME,
  MONGO_USERNAME,
  MONGO_PASSWORD,
} = process.env;
