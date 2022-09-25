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
    currentroom: {
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
    },
    fromdate: {
        type: Date,
        required:true
    }
})

const Users = mongoose.model('VACATEROOM', userSchema);

module.exports = Users;