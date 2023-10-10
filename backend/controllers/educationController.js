const DataModel = require('../models/educationModel');
const {createService} = require("../Services/createService");
const {readService} = require("../Services/readService");
const {updateService} = require("../Services/updateService");
const {deleteService} = require("../Services/deleteService");

exports.createEducation = async (req, res) => {
    let Result = await createService(req, DataModel);
    res.status(200).json(Result)
}

exports.readEducation = async (req,res) => {
    let Result = await readService(DataModel);
    res.status(200).json(Result)
}

exports.updateEducation = async (req,res) => {
    let Result = await updateService(req,DataModel);
    res.status(200).json(Result)
}