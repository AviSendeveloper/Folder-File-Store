const { body } = require("express-validator");
const UserService = require("../../Services/UserService");

module.exports = () => {
    return [
        body("name", "name required").isString().trim(),
        body("email", "Invalid email")
            .trim()
            .isEmail()
            .normalizeEmail()
            .custom(async (value) => {
                const response = await UserService.checkUserExist(value);
                if (response) throw new Error(`${value} already registered`); // if user exist
                return true;
            }),
        body("password", "atleast 6 charecter").trim().isLength({ min: 6 }),
        body("confirm-password", "password not matched").custom(
            (value, { req }) => {
                if (value !== req.body.password) {
                    return false;
                }
                return true;
            }
        ),
    ];
};
