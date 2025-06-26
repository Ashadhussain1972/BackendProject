class APIRespoce{
    constructor(statusCode,data,message = "Success") {
    this.statusCode = statusCode; // HTTP status code (e.g., 200, 201)
    this.data = data; // The data to be returned in the response
    this.message = message; // A message describing the response, defaulting to "Success"
    this.sussess = statusCode < 400; // Indicates whether the response is successful (status code < 400)
}

}