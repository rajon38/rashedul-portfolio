const DataModel = require('../models/portfolioModel');
const {createService} = require("../Services/createService");
const {readService} = require("../Services/readService");
const {updateService} = require("../Services/updateService");
const {deleteService} = require("../Services/deleteService");

exports.createPortfolio = async (req, res) => {
    let Result = await createService(req, DataModel);
    res.status(200).json(Result)
}

exports.readPortfolio = async (req,res) => {
    let Result = await readService(DataModel);
    res.status(200).json(Result)
}

exports.updatePortfolio = async (req,res) => {
    let Result = await updateService(req,DataModel);
    res.status(200).json(Result)
}

exports.deletePortfolio = async (req,res) =>{
    let Result = await deleteService(req,DataModel);
    res.status(200).json(Result)
}