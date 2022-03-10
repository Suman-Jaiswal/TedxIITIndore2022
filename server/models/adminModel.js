const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    username: String,
    email: String
})

const adminModel = mongoose.model('admins', adminSchema);

module.exports = adminModel