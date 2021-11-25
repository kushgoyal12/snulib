const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    image: String,
    name: String,
    author: String,
    location: String,
    issued_by: String,
    status: String,
    category: String
});

module.exports = mongoose.model('Book', BookSchema)   