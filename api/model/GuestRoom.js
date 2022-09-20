const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    gender: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    contactnumber: {
        type: Number,
        required:true
    }
})

const Uses = mongoose.model('GUESTROOM', userSchema);

module.exports = Uses;