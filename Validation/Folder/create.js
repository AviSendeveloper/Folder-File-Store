const { body } = require("express-validator");

module.exports = () => {
    return [
        body("name", "name required").notEmpty().trim().isString(),
        body("description").optional(),
    ];
};
