const { body } = require("express-validator");
const UserService = require("../../Services/UserService");

module.exports = () => {
    return [
        body("email", "Invalid email")
            .trim()
            .isEmail()
            .normalizeEmail()
            .custom(async (value) => {
                const response = await UserService.checkUserExist(value);
                if (!response) throw new Error(`${value} not registered yet`); // if user exist
                return true;
            }),
        body("password", "atleast 6 charecter").trim().isLength({ min: 6 }),
    ];
};
