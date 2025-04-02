const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) { // can use arrow function expression
  try {
    const token = req.headers.authorization.split(" ")[1]; // creates an array like this ["bearer", "wwerwer.sdfsdf.sdfsdf"]
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded.payload; // this adds the user object o req.user
    next(); // without calling next,(calling the next middleware function) the request will stall
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: "Invalid token." });
  }
};

module.exports = verifyToken;