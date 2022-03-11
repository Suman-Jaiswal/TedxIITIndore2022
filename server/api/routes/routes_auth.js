const route = require('express').Router()
const { Post_Admin, Post_Updates, Delete_Admin, Delete_Update, Get_Admins } = require('../controllers/auth_controllers')
const { auth_admin, auth_superAdmin } = require('../middleware/auth')

//Add/Delete Updates
route.post('/updates', auth_admin, Post_Updates);
route.delete('/updates/:id', auth_admin, Delete_Update);

//Add/Delete Admins
route.get('/admin', auth_superAdmin, Get_Admins);
route.post('/admin', auth_superAdmin, Post_Admin);
route.delete('/admin/:id', auth_superAdmin, Delete_Admin);

module.exports = route