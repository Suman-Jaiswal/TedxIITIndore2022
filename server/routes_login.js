const route = require('express').Router()

route.post('/', (req, res, next) => {
    res.end()
})

module.exports = route