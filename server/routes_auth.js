const route = require('express').Router()
const Updates = require('./models/updatesModel')
const Admins = require('./models/adminModel')

route.post('/updates', (req, res, next) => {
    if (req.admin) {
        Updates.create(req.body)
            .then(() => {
                Updates.find({})
                    .sort({ _id: 'desc' })
                    .then(updates => {
                        res.status(200).send(updates)
                    })
                    .catch(next)
            })
            .catch(next)
    }
    else res.status(403).end()
});

route.delete('/updates/:id', (req, res, next) => {
    if (req.admin) {
        Updates.deleteOne({ _id: req.params.id })
            .then(() => {
                Updates.find({})
                    .sort({ _id: 'desc' })
                    .then(updates => {
                        res.status(200).send(updates)
                    })
                    .catch(next)
            })
            .catch(next)
    }
    else res.status(403).end()
});

//Add/Delete Admins
route.get('/admin', (req, res, next) => {
    if (req.superAdmin) {
        Admins.find({})
            .sort({ _id: 'desc' })
            .then(admins => {
                res.status(200).send(admins)
            })
            .catch(next)
    }
    else res.status(403).end();
});

route.post('/admin', (req, res, next) => {
    if (req.superAdmin) {
        Admins.create(req.body)
            .then(() => {
                Admins.find({})
                    .sort({ _id: 'desc' })
                    .then(admins => {
                        res.status(201).send(admins);
                    })
                    .catch(next)
            })
            .catch(next)
    }
    else res.status(403).end();
});

route.delete('/admin/:id', (req, res, next) => {
    if (req.superAdmin) {
        Admins.deleteOne({ _id: req.params.id })
            .then(() => {
                Admins.find({})
                    .sort({ _id: 'desc' })
                    .then(admins => {
                        console.log(admins)
                        res.status(200).send(admins);
                    })
            })
            .catch(next)
    }
    else res.status(403).end();
});

module.exports = route