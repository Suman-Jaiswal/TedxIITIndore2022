const route = require('express').Router()
const Speakers = require('../models/speakerModel')

route.get('/speakers', (req, res, next) => {
    Speakers.find({})
        .sort({ date: 'desc' })
        .then(speakers => res.status(200).send(speakers))
        .catch(next)
})

module.exports = route