const bcrypt = require("bcrypt");
const UserService = require("../Services/UserService");
const jwt = require("../Util/jwt");

exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    const salt = 5;
    const hashPassword = await bcrypt.hash(password, salt);

    const response = await UserService.createUser({
        name,
        email,
        password: hashPassword,
    });

    return res.json({
        status: true,
        data: response,
    });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const response = await UserService.matchUser({ email, password });

    if (response.status) {
        const token = jwt.createToken(response.data, 30);
        return res.json({
            status: true,
            token: token,
            msg: "Login successfully",
        });
    }

    return res.json({
        status: false,
        msg: "Invalid email or password",
    });
};
