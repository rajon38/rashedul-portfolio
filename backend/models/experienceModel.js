const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    frontend: [{
        technology: {
            type: String,
        },
        experienceLevel: {
            type: String,
        },
    }],
    backend: [{
        technology: {
            type: String,
        },
        experienceLevel: {
            type: String,
        },
    }],
},{timestamps:true, versionKey:false});

const experienceModel = mongoose.model('Experience', experienceSchema);

module.exports = experienceModel;
