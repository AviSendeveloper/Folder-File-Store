const Folder = require("../Model/Folder");

exports.createFolder = async ({ name, description, parentFolderId }) => {
    const response = await Folder.create({
        name,
        description,
        parentFolder: parentFolderId,
    });
    return response;
};
