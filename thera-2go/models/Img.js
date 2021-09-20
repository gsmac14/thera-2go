const mongoose = require("mongoose");

var ImageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    thumbnail:{
        type: String,
        default:""
    },

    explain:{
        type: String,
        required: true
    }
});

const Images = mongoose.model("Images", ImageSchema );

module.exports = Images;