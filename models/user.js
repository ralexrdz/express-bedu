let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/perfiles')

var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  nick: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('user', userSchema)
