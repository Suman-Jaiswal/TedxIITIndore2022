require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const { authToken } = require('./config/jwtAuth')

//connection-mongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('database connected'))
    .catch(err => {
        console.log("MongoDB connection failure:")
        console.log(err.message)
    })


//Body Parser
app.use(express.json())

//API
// app.use('/api', require('./routes.js'))
app.use('/api/login', require('./routes_login.js'))
app.use('/api/auth', authToken, require('./routes_auth.js'))

//Serving static files
if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(__dirname + '/admin/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'admin', 'build', 'index.html'));
    })
}

//Error handling
app.use((err, req, res, next) => {
    console.log(err.message)
    res.status(500).send("Something went wrong...")
})

//Request listening
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});