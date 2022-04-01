const Updates = require('../models/updatesModel')
const Admins = require('../models/adminModel')

Post_Updates = (req, res, next) => {
    Updates.create(req.body)
        .then(() => {
            Updates.find({})
                .sort({ _id: 'desc' })
                .then(updates => res.status(200).send(updates))
                .catch(next)
        })
        .catch(next)
}

Delete_Update = (req, res, next) => {
    Updates.deleteOne({ _id: req.params.id })
        .then(() => {
            Updates.find({})
                .sort({ _id: 'desc' })
                .then(updates => res.status(200).send(updates))
                .catch(next)
        })
        .catch(next)
}

Get_Admins = (req, res, next) => {
    Admins.find({})
        .sort({ _id: 'desc' })
        .then(admins => res.status(200).send(admins))
        .catch(next)
}

Post_Admin = (req, res, next) => {
    Admins.create(req.body)
        .then(() => {
            Admins.find({})
                .sort({ _id: 'desc' })
                .then(admins => res.status(201).send(admins))
                .catch(next)
        })
        .catch(next)
}

Delete_Admin = (req, res, next) => {
    Admins.deleteOne({ _id: req.params.id })
        .then(() => {
            Admins.find({})
                .sort({ _id: 'desc' })
                .then(admins => res.status(200).send(admins))
                .catch(next)
        })
        .catch(next)
}

module.exports = {
    Post_Updates,
    Delete_Update,
    Get_Admins,
    Post_Admin,
    Delete_Admin
}