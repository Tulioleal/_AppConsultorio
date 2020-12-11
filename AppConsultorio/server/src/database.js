const mongoose = require('mongoose');

const {
    NOTES_APP_MONGODB_HOST,
    NOTES_APP_MONGODB_DATABASE
} = process.env

MONGODB_URI = `mongodb+srv://${NOTES_APP_MONGODB_HOST}@cluster0.b6njz.gcp.mongodb.net/${NOTES_APP_MONGODB_DATABASE}?retryWrites=true&w=majority`

mongoose
    .connect(MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then( db => console.log( 'DB is connected'))
    .catch( err => console.log(err))