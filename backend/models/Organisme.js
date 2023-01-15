const mongoose = require('mongoose')

const organismeSchema = mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Please add a name value']
    },
  },
  {
    timestamps: true 
  }
)

module.exports = mongoose.model('Organisme', organismeSchema)