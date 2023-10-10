const {createService} = require("../Services/createService");
const DataModel = require('../models/contactModel')
const {readService} = require("../Services/readService");
const {deleteService} = require("../Services/deleteService");



exports.createContact = async (req,res) =>{
    let Result= await createService(req,DataModel)
    res.status(200).json(Result)
}

exports.readContact = async (req,res) =>{
    let Result = await readService(DataModel);
    res.status(200).json(Result);
}

exports.deleteContact = async (req,res) =>{
    let Result= await deleteService(req,DataModel)
    res.status(200).json(Result)
}