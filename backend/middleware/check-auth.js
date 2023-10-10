const jwt =require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = "thisNotSecret1245"

exports.checkAuth = (req, res, next) => {
    try {
        const decoded = jwt.verify(
            req.headers.token,
            JWT_SECRET
        );

        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json(err);
    }
};