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
    role: [{
        type: mongoose.Types.ObjectId,
        ref: 'Role'
    }],
    password: {
        type: String,
        required: [true, 'please add password'],
    },


},{ timestamps: true })

module.exports = mongoose.model('User',userSchema)