const mongoose = require('mongoose')

//Schema
const speakerSchema = new mongoose.Schema({
    speakerName: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const speakerModel = mongoose.model('speakers', speakerSchema)
module.exports = speakerModel