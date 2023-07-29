// Importing required modules
import response from "../helpers/response.helper.js";
import { getCommentsByLiveVideoId } from "../models/product.model.js";

// Define the productByLiveVideo function
const productByLiveVideo = async (req, res) => {
  try {
    // Destructure id from req.params
    const { id } = req.params;

    // Get products by the Live Video ID
    const products = await getCommentsByLiveVideoId(id);

    // If products are not found, return a failure response
    if (!products) {
      return response.failed(res, "Get products failed", "failed");
    }

    // If products are found, return a success response
    return response.success(res, products, "success", "Get products success");
  } catch (error) {
    // If an error occurs, return a failure response with the error message
    return response.failed(res, error.message, 500);
  }
};

// Export the productByLiveVideo function
export { productByLiveVideo };
