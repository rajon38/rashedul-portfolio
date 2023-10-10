const mongoose = require("mongoose")
const aboutSchema = new mongoose.Schema({
    image:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    experience:{
        type: Number,
        required: true
    },
    clients:{
        type: Number,
        required: true
    },
    projects:{
        type: Number,
        required: true
    }
},{timestamps:true, versionKey:false})

const aboutModel = mongoose.model("about", aboutSchema);
module.exports = aboutModel;