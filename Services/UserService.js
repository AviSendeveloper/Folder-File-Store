const User = require("../Model/User");
const bcrypt = require("bcrypt");

exports.createUser = async ({ name, email, password }) => {
    const response = await User.create({ name, email, password });
    return response;
};

exports.checkUserExist = async (email) => {
    const user = await User.findOne({ email });
    if (user) return true;
    return false;
};

exports.matchUser = async ({ email, password }) => {
    const user = await User.findOne({ email });

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (isPasswordMatched) {
        return {
            status: true,
            data: user,
        };
    }

    return {
        status: false,
    };
};
