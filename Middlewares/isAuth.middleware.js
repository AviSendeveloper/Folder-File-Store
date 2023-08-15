const jwt = require("../Util/jwt");

module.exports = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    if (!bearerHeader) {
        return res.josn({
            status: false,
            msg: "Authorization token missing",
        });
    }
    const token = bearerHeader.split(" ")[1];

    const userFromToken = jwt.getUserFromToken(token);

    if (userFromToken) {
        return res.josn({
            status: false,
            msg: "Not authorized",
        });
    }

    req.user = userFromToken;
    next();
};
