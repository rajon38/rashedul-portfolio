const DataModel = require('../models/introModel')
const {createService} = require("../Services/createService");
const {deleteService} = require("../Services/deleteService");
const {update} = require("./introController");
const {updateService} = require("../Services/updateService");
const {readService} = require("../Services/readService");

exports.create = async (req,res)=>{
    let Result= await createService(req,DataModel)
    res.status(200).json(Result)
}

exports.read = async (req,res)=>{
    let Result= await readService(DataModel)
    res.status(200).json(Result)
}


exports.update = async (req, res) => {
    let Result= await updateService(req,DataModel)
    res.status(200).json(Result)
};


exports.remove = async (req,res) =>{
    let Result= await deleteService(req,DataModel)
    res.status(200).json(Result)
}