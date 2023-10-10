const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 64,
    }
},{timestamps:true, versionKey:false})

const profileModel = mongoose.model("users", userSchema);
module.exports = profileModel;