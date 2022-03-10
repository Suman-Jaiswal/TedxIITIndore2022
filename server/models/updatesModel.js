const mongoose = require('mongoose')

//Schema
const updatesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    redirect: String,
    images: [Buffer]
})

const updatesModel = mongoose.model('updates', updatesSchema)
module.exports = updatesModel