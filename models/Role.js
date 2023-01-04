const mongoose = require('mongoose')
const roleSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please add the role']
    }
},{timestamps: true})

module.exports = mongoose.model('Role', roleSchema)