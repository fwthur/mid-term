// Importing required modules and schemas
import db from "./mongo.database.js";
import {
  liveVideoSchema,
  commentSchema,
  productSchema,
} from "../schema/_index.schema.js";
import { faker } from "@faker-js/faker";

// Function to initialize data
const initializeData = async () => {
  for (let i = 0; i < 10; i++) {
    // Create a new live video
    const liveVideo = new liveVideoSchema({
      videoImageUrl: faker.image.url(),
      videoTitle: faker.lorem.sentence(),
      videoUsername: faker.internet.userName(),
    });

    // Insert live video into database
    await db.collection("livevideos").insertOne(liveVideo);
    console.log(`[seeder]: live video ${i + 1} seeded`);

    for (let j = 0; j < 10; j++) {
      // Create a new comment
      const comment = new commentSchema({
        avatar: faker.image.avatar(),
        username: faker.internet.userName(),
        comment: faker.lorem.sentence(),
        liveVideoId: liveVideo._id,
      });

      // Insert comment into database
      await db.collection("comments").insertOne(comment);
      console.log(`[seeder]: live video ${i + 1} - comment ${j + 1} seeded`);
    }

    for (let k = 0; k < 10; k++) {
      // Create a new product
      const product = new productSchema({
        productImageUrl: faker.image.url(),
        productName: faker.commerce.productName(),
        productPrice: faker.commerce.price(),
        liveVideoId: liveVideo._id,
      });

      // Insert product into database
      await db.collection("products").insertOne(product);
      console.log(`[seeder]: live video ${i + 1} - product ${k + 1} seeded`);
    }
  }
};

// Seeder function
const seeder = async () => {
  try {
    console.log("[seeder]: running...");

    // Drop the database
    db.dropDatabase();
    console.log("[seeder]: Database dropped");

    // Initialize data
    await initializeData();

    console.log("[seeder]: Done");
  } catch (error) {
    console.log(error);
  }
};

// Export functions
export { initializeData, seeder };
