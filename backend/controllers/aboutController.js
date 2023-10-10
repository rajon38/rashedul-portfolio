const DataModel = require('../models/aboutModel');
const {createService} = require("../Services/createService");
const {updateService} = require("../Services/updateService");
const {readService} = require("../Services/readService"); // Assuming your model file is named aboutModel.js

// Controller function to create a new about entry
exports.createAbout = async (req, res) => {
    let Result= await createService(req,DataModel)
    res.status(200).json(Result)
};


exports.readAbout = async (req, res) => {
    let Result = await readService(DataModel);
    res.status(200).json(Result);
};

exports.updateAbout = async (req,res) => {
    let Result=await updateService(req,DataModel)
    res.status(200).json(Result)
}