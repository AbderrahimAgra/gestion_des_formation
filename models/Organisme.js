const mongoose = require('mongoose')

const organismeSchema = mongoose.Schema({
    users: [{
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      // ref: 'User'
    }],
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