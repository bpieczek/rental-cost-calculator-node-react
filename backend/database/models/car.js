const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    brand:{
        type: String,
        required: true
    },
    category:{
        type: String,
        enum: ["Basic", "Standard", "Medium", "Premium"],
        default: "Basic",
        required: true
    },
    location:{
        type: String,
        required: true
    },
    combustion:{
        type: Number,
        required: true
    },
    howManyCars:{
        type: Number,
        require: true,
        default: 0
    }
});