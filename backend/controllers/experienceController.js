const DataModel = require('../models/experienceModel');
const {createService} = require("../Services/createService");
const {readService} = require("../Services/readService");
const {updateService} = require("../Services/updateService");
const {deleteService} = require("../Services/deleteService");

exports.createExperience = async (req, res) => {
    let Result = await createService(req, DataModel);
    res.status(200).json(Result)
}

exports.readExperience = async (req,res) => {
    let Result = await readService(DataModel);
    res.status(200).json(Result)
}

exports.updateExperience = async (req,res) => {
    let Result = await updateService(req,DataModel);
    res.status(200).json(Result)
}