const DataModel = require('../models/introModel')
const {createService} = require("../Services/createService");
const {deleteService} = require("../Services/deleteService");
const {updateService} = require("../Services/updateService");
const {readService} = require("../Services/readService");
const {fileSizeFormatter} = require("../public/fileUpload");

exports.create = async (req,res)=>{
    // Check if file size exceeds 2MB
    if ((req.files['image'][0].size > 2 * 1024 * 1024) || (req.files['resume'][0].size > 2 * 1024 * 1024)) {
        const formattedSize = fileSizeFormatter(req.file.size, 2);
        return res.status(400).json({
            status: "fail",
            data: `File size (${formattedSize}) exceeds the limit of 2MB.`,
        });
    }

    let Result= await createService(req,DataModel)
    res.status(200).json(Result)
}

exports.read = async (req,res)=>{
    let Result= await readService(DataModel)
    res.status(200).json(Result)
}

exports.update = async (req, res) => {
    // Check if file size exceeds 2MB
    if ((req.files['image'][0].size > 2 * 1024 * 1024) || (req.files['resume'][0].size > 2 * 1024 * 1024)) {
        const formattedSize = fileSizeFormatter(req.file.size, 2);
        return res.status(400).json({
            status: "fail",
            data: `File size (${formattedSize}) exceeds the limit of 2MB.`,
        });
    }
    let Result= await updateService(req,DataModel)
    res.status(200).json(Result)
};

exports.remove = async (req,res) =>{
    let Result= await deleteService(req,DataModel)
    res.status(200).json(Result)
}