/*const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers["authorization"];
    if (!authorizationHeader) {
      return res
        .status(401)
        .send({ message: "Authorization header missing", success: false });
    }

    const token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
      if (err) {
        return res
          .status(200)
          .send({ message: "Token is not valid", success: false });
      } else {
        req.body.userId = decode.id;
        next();
      }
    });
  } catch (error) {
    console.error(error); // Handle or log the error appropriately
    res.status(500).send({ message: "Internal server error", success: false });
  }
};*/

const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers["authorization"];
    
    // Check if the authorization header is present
    if (!authorizationHeader) {
      return res.status(401).send({
        message: "Authorization header missing",
        success: false
      });
    }

    // Split the header to get the token
    const token = authorizationHeader.split(" ")[1];

    // Check if token exists
    if (!token) {
      return res.status(401).send({
        message: "Token missing",
        success: false
      });
    }

    // Verify the token
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
      if (err) {
        console.error("Token verification failed:", err); // Log the verification error
        return res.status(403).send({
          message: "Token is not valid",
          success: false
        });
      }

      // Attach the user ID to the request body
      req.body.userId = decoded.id; // Assuming the token contains the user ID in the `id` field
      next(); // Proceed to the next middleware or route handler
    });
  } catch (error) {
    console.error("JWT middleware error:", error); // Log the error
    res.status(500).send({
      message: "Internal server error",
      success: false
    });
  }
};