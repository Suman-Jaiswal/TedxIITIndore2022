const route = require('express').Router()
const Speakers = require('./models/speakerModel')

route.post('/speakers', (req, res, next) => {
    Speakers.create(req.body)
        .then(() => {
            res.status(201).send("done")
        })
        .catch(next)
})

module.exports = route