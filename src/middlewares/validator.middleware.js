// Importing required modules
import response from "../helpers/response.helper.js";

// Function to validate request data against a schema
const validator = (schema, property) => {
  // Return middleware function
  return (req, res, next) => {
    // Validate the request property against the schema
    const { error } = schema.validate(req[property]);
    const valid = error == null;

    // If the validation is successful, proceed to the next middleware
    if (valid) {
      next();
    } else {
      // If the validation failed, return an error response
      const { details } = error;
      const message = details.map((i) => i.message).join(",");
      return response.failed(res, message, 422);
    }
  };
};

// Export the validator function
export default validator;
