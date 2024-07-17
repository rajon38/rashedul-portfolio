const DataModel = require('../models/introModel');
const { createService } = require("../Services/createService");
const { deleteService } = require("../Services/deleteService");
const { updateService } = require("../Services/updateService");
const { readService } = require("../Services/readService");
const { fileSizeFormatter } = require("../public/fileUpload");

exports.create = async (req, res) => {
    // Check if file size exceeds 2MB
    if ((req.files['image'][0].size > 2 * 1024 * 1024) || (req.files['resume'][0].size > 2 * 1024 * 1024)) {
        const formattedSize = fileSizeFormatter(req.file.size, 2);
        return res.status(400).json({
            status: "fail",
            data: `File size (${formattedSize}) exceeds the limit of 2MB.`,
        });
    }

    let Result = await createService(req, DataModel);
    res.status(200).json(Result);
};

exports.read = async (req, res) => {
    let Result = await readService(DataModel);
    res.status(200).json(Result);
};

exports.update = async (req, res) => {
    try {
        const { _id } = req.params;
        const updatedData = req.body; // Assuming you also pass other fields in the body to update

        // Check if files are present
        const imageFile = req.files['image'] && req.files['image'][0];
        const resumeFile = req.files['resume'] && req.files['resume'][0];

        // Check if file size exceeds 2MB
        if ((imageFile && imageFile.size > 2 * 1024 * 1024) || (resumeFile && resumeFile.size > 2 * 1024 * 1024)) {
            const formattedSize = fileSizeFormatter(imageFile ? imageFile.size : resumeFile.size, 2);
            return res.status(400).json({
                status: "fail",
                data: `File size (${formattedSize}) exceeds the limit of 2MB.`,
            });
        }

        // Update the updatedData object with file paths/identifiers if files exist
        if (imageFile) {
            updatedData.image = imageFile.filename; // Assuming Multer provides filename after storage
        }
        if (resumeFile) {
            updatedData.resume = resumeFile.filename; // Assuming Multer provides filename after storage
        }

        // Perform the update operation in the database
        const data = await DataModel.findByIdAndUpdate(_id, { $set: updatedData }, { new: true });

        if (!data) {
            return res.status(404).json({
                status: "fail",
                data: "Data not found",
            });
        }

        return res.status(200).json({
            status: "success",
            data: data,
        });
    } catch (error) {
        console.error("Error updating data:", error);
        return res.status(500).json({
            status: "error",
            message: "Internal server error",
        });
    }
};

exports.remove = async (req, res) => {
    let Result = await deleteService(req, DataModel);
    res.status(200).json(Result);
};
