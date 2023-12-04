const DataModel = require('../models/portfolioModel');
const {createService} = require("../Services/createService");
const {readService} = require("../Services/readService");
const {updateService} = require("../Services/updateService");
const {deleteService} = require("../Services/deleteService");
const {fileSizeFormatter} = require('../public/fileUpload')

exports.createPortfolio = async (req, res) => {
    // Check if file size exceeds 2MB
    if (req.files && req.files['image'][0].size > 2 * 1024 * 1024) {
        const formattedSize = fileSizeFormatter(req.files['image'][0].size, 2);
        return res.status(400).json({
            status: "fail",
            data: `File size (${formattedSize}) exceeds the limit of 2MB.`,
        });
    }

    let Result = await createService(req, DataModel);
    res.status(200).json(Result);
};

exports.readPortfolio = async (req, res) => {
    let Result = await readService(DataModel);
    res.status(200).json(Result);
};

exports.updatePortfolio = async (req, res) => {
    // Check if file size exceeds 2MB
    if (req.files && req.files['image'][0].size > 2 * 1024 * 1024) {
        const formattedSize = fileSizeFormatter(req.files['image'][0].size, 2);
        return res.status(400).json({
            status: "fail",
            data: `File size (${formattedSize}) exceeds the limit of 2MB.`,
        });
    }

    let Result = await updateService(req, DataModel);
    res.status(200).json(Result);
};

exports.deletePortfolio = async (req, res) => {
    let Result = await deleteService(req, DataModel);
    res.status(200).json(Result);
};
