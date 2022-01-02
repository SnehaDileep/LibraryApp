const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Library');
mongoose.connect('mongodb+srv://userone:userone@snehaictk.i8gmh.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;