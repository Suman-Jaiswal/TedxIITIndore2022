const mongoose = require('mongoose')
const schema = mongoose.Schema

//Schema
const speakerSchema = new schema({
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