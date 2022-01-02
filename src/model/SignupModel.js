const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Library');
mongoose.connect('mongodb+srv://userone:userone@snehaictk.i8gmh.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const SignupSchema = new Schema({
    fname : String,
    lname: String,
    password: String,
    cnfpswd: String
});

const signupdata = mongoose.model('signupdata',SignupSchema);

module.exports = signupdata;