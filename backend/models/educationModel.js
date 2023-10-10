const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    academic: [{
        title: {
            type: String,
        },
        desc: {
            type: String,
        },
        duration:{
            type: Number
        }
    }],
    backend: [{
        title: {
            type: String,
        },
        desc: {
            type: String,
        },
        duration:{
            type: Number
        }
    }],
},{timestamps:true, versionKey:false})

const educationModel = mongoose.model('education', educationSchema);

module.exports = educationModel;