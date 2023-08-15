const { Schema, model } = require("mongoose");

const folderSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
        },
        parentFolder: {
            type: Schema.Types.ObjectId,
            ref: "folders",
        },
        folders: [
            {
                type: Schema.Types.ObjectId,
                ref: "folders",
            },
        ],
        files: [
            {
                type: Schema.Types.ObjectId,
                ref: "files",
            },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = model("Folder", folderSchema);
