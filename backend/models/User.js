const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'please add firstname']
    },
    lastname: {
        type: String,
        required: [true, 'please add lastname']
    },
    email:  {
        type: String,
        required: [true, 'please add email']
    },
    emailIsValid: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        required: [true, 'please add role']
    },
    password: {
        type: String,
        required: [true, 'please add password'],
    },
    organisme:{
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'please select an organisme']
    },
    formations:[{
        type: mongoose.Schema.Types.ObjectId,
    }]


},{ timestamps: true })

module.exports = mongoose.model('User',userSchema)