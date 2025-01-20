const mongoose = require('mongoose')
require('dotenv').config()


const openMongoConnection = () => {
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback () {
        console.log("connected to MongoDB");
    });
    mongoose.connect('mongodb+srv://<pipatea_username>:<Zenobia32_password>@1605.m9ot9.mongodb.net/?retryWrites=true&w=majority&appName=1605');
};

mongoose.set('strictQuery', true)

module.exports = {openMongoConnection};