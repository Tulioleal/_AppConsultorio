const express = require('express')
const morgan = require('morgan');
const cors = require('cors');
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000
let appPath = '../../AppConsultorio/dist/AppConsultorio/'

//variables de entorno
app.set('port', process.env.PORT || 4000)

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Pacientes
app.use('/api/pacientes', require('./routes/pacientes.routes'))
//CitasGineco
app.use('/api/citasGineco', require('./routes/citaGineco.routes'))
//CitasObst
app.use('/api/citasObst', require('./routes/citaObst.routes'))

//Listen App
app.use('/',  express.static(path.join(__dirname, appPath)))
.get('*', (req,res)=> res.sendFile(path.join(__dirname, appPath + 'index.html')))
.listen(PORT)

module.exports = app
