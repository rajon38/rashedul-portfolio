const mongoose = require("mongoose")
const introSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true,
    },
    resume:{
        type: String,
        required: true,
    }
}, {timestamps:true, versionKey:false})

const introModel = mongoose.model("intro", introSchema);
module.exports = introModel;