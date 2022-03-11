const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    username: {
        required: true,
        unique: true
    },
    password: {
        required: true
    },
})

const adminModel = mongoose.model('admins', adminSchema);

module.exports = adminModel