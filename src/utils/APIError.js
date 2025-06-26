class APIError extends Error {
    // Inherits from the built-in Error class, allowing it to behave like a normal error but with custom properties.
constructor(
  message = "Something went wrong",  // Default error message
  statusCode,                        // HTTP status code (e.g., 404, 500)
  statck = "",                       // Optional custom stack trace
  errors = []                        // Additional error details (e.g., validation errors)
)

  {
    super(message);//Calls the base Error constructor to set the message.
    this.statusCode = statusCode;
    this.data = null;
    this.success = false;
    this.errors = errors;

    if (statck) {
      this.stack = statck;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default APIError;
