const route = require('express').Router();

route.post('/', require('../controllers/login_controller'));

module.exports = route