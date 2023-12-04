const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    image:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    review:{
        type: String,
        required: true,
    }
},{timestamps:true, versionKey:false})

const testimonialModel = mongoose.model('testimonial', testimonialSchema);

module.exports = testimonialModel;