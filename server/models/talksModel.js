const mongoose = require('mongoose')
const schema = mongoose.Schema

//Schema
const talksSchema = new schema({
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