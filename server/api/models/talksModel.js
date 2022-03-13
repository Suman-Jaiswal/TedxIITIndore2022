const mongoose = require('mongoose')

//Schema
const talksSchema = new mongoose.Schema({
    video: {
        type: String,
        required: true
    },
    speaker: {
        type: String,
        required: true
    }
})

const talksModel = mongoose.model('talks', talksSchema)
module.exports = talksModel