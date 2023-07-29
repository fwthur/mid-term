// Define a response object with success and failed methods
const response = {
  // Success method for sending a successful response
  success: (res, data, status, message, pagination) => {
    // If pagination data is provided
    if (pagination) {
      return res.json({
        code: 200,
        status,
        data,
        message,
        pagination,
      });
    }
    // If no pagination data is provided
    res.json({
      code: 200,
      status,
      data,
      message,
    });
  },

  // Failed method for sending an error response
  failed: (res, error, code) => {
    res.status(code || 400).json({
      code: code || 400,
      status: "failed",
      error,
    });
  },
};

// Export the response object
export default response;
