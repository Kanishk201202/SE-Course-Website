const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    rollnumber:{
        type: String,
        required:true
    },
    programme: {
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

const User = mongoose.model('ROOM', userSchema);

module.exports = User;