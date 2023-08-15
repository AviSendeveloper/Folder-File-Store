const FolderService = require("../Services/FolderService");

exports.create = async (req, res) => {
    const { name, description = "", parentFolderId = undefined } = req.body;

    const response = await FolderService.createFolder({
        name,
        description,
        parentFolderId,
    });

    return res.json({
        status: true,
        data: response,
    });
};
