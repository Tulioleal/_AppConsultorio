const express= require('express')
const morgan = require('morgan')

const createRoles = require('./libs/initialSetups');

const cors = require('cors')
const path = require('path')
var cookieParser = require('cookie-parser')

const app = express()
createRoles()

const PORT = process.env.PORT || 4000 /*Esto se comenta*/
let appPath = '../../dist/AppConsultorio/' /*Esto se comenta*/

//variables de entorno
// app.set('port', process.env.PORT || 4000) /* Esto se comenta para build */

app.use(cors())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Pacientes
app.use('/api/pacientes', require('./routes/pacientes.routes'))
//CitasGineco
app.use('/api/citasGineco', require('./routes/citaGineco.routes'))
//CitasObst
app.use('/api/citasObst', require('./routes/citaObst.routes'))
//AuthRoutes
app.use('/api/auth', require('./routes/auth.routes'))
//UserRoutes
app.use('/api/user', require('./routes/user.routes'))


//Listen App
app.use('/',  express.static(path.join(__dirname, appPath))) /*Esto se comenta*/
.get('*', (req,res)=> res.sendFile(path.join(__dirname, appPath + 'index.html'))) /*Esto se comenta*/
.listen(PORT) /*Esto se comenta*/

module.exports = app
