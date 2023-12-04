const DataModel = require('../models/testimonialModel');
const {createService} = require("../Services/createService");
const {readService} = require("../Services/readService");
const {updateService} = require("../Services/updateService");
const {deleteService} = require("../Services/deleteService");
const {fileSizeFormatter} = require("../public/fileUpload");

exports.createTestimonial = async (req, res) => {
    if (req.files && req.files['image'][0].size > 2 * 1024 * 1024) {
        const formattedSize = fileSizeFormatter(req.files['image'][0].size, 2);
        return res.status(400).json({
            status: "fail",
            data: `File size (${formattedSize}) exceeds the limit of 2MB.`,
        });
    }

    let Result = await createService(req, DataModel);
    res.status(200).json(Result)
}

exports.readTestimonial = async (req,res) => {
    let Result = await readService(DataModel);
    res.status(200).json(Result)
}

exports.updateTestimonial = async (req,res) => {
    if (req.files && req.files['image'][0].size > 2 * 1024 * 1024) {
        const formattedSize = fileSizeFormatter(req.files['image'][0].size, 2);
        return res.status(400).json({
            status: "fail",
            data: `File size (${formattedSize}) exceeds the limit of 2MB.`,
        });
    }

    let Result = await updateService(req,DataModel);
    res.status(200).json(Result)
}

exports.deleteTestimonial = async (req,res) =>{
    let Result = await deleteService(req,DataModel);
    res.status(200).json(Result)
}