require('dotenv').config();
const express = require('express')

const exp = express()
const path = require('path')
const PORT = process.env.PORT || 5000

let appPath = '../../AppConsultorio/dist/AppConsultorio/'

const app = require('./app');
require('./database');

exp.use('/',  express.static(path.join(__dirname, appPath)))
.get('*', (eq,res)=> res.sendFile(path.join(__dirname, appPath + 'index.html')))
.listen(PORT, ()=> console.log(`Listening on ${PORT}`))

app.listen(app.get('port'), () => {

    console.log('server on port', app.get('port'))
})
