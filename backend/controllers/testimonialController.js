const DataModel = require('../models/testimonialModel');
const {createService} = require("../Services/createService");
const {readService} = require("../Services/readService");
const {updateService} = require("../Services/updateService");
const {deleteService} = require("../Services/deleteService");

exports.createTestimonial = async (req, res) => {
    let Result = await createService(req, DataModel);
    res.status(200).json(Result)
}

exports.readTestimonial = async (req,res) => {
    let Result = await readService(DataModel);
    res.status(200).json(Result)
}

exports.updateTestimonial = async (req,res) => {
    let Result = await updateService(req,DataModel);
    res.status(200).json(Result)
}

exports.deleteTestimonial = async (req,res) =>{
    let Result = await deleteService(req,DataModel);
    res.status(200).json(Result)
}