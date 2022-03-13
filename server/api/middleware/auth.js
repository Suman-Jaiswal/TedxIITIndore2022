auth_admin = (req, res, next) => {
    if (req.admin) {
        next()
    } else res.status(403).end()
}

auth_superAdmin = (req, res, next) => {
    if (req.superAdmin) {
        next()
    } else res.status(403).end()
}

module.exports = {
    auth_admin,
    auth_superAdmin
}