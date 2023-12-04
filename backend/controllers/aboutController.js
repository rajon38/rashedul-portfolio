const DataModel = require('../models/aboutModel');
const {createService} = require("../Services/createService");
const {updateService} = require("../Services/updateService");
const {readService} = require("../Services/readService");
const {fileSizeFormatter} = require("../public/fileUpload"); // Assuming your model file is named aboutModel.js

// Controller function to create a new about entry
exports.createAbout = async (req, res) => {
    if (req.files && req.files['image'][0].size > 2 * 1024 * 1024) {
        const formattedSize = fileSizeFormatter(req.files['image'][0].size, 2);
        return res.status(400).json({
            status: "fail",
            data: `File size (${formattedSize}) exceeds the limit of 2MB.`,
        });
    }

    let Result= await createService(req,DataModel)
    res.status(200).json(Result)
};


exports.readAbout = async (req, res) => {
    let Result = await readService(DataModel);
    res.status(200).json(Result);
};

exports.updateAbout = async (req,res) => {

    if (req.files && req.files['image'][0].size > 2 * 1024 * 1024) {
        const formattedSize = fileSizeFormatter(req.files['image'][0].size, 2);
        return res.status(400).json({
            status: "fail",
            data: `File size (${formattedSize}) exceeds the limit of 2MB.`,
        });
    }
    let Result=await updateService(req,DataModel)
    res.status(200).json(Result)
}