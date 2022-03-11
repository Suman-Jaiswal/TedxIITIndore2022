const Admin = require('../models/adminModel');
const { genToken } = require('../middleware/jwtAuth');

module.exports = Login = (req, res, next) => {
    console.log(req.body)
    Admin.findOne(req.body)
        .then(admin => {
            if (admin) {
                res.status(200).send(genToken({ username: admin.username }));
            } else {
                res.status(403).end();
            }
        })
        .catch(next);
}