const mongoose = require('mongoose')


let BBSchema = new mongoose.Schema({
      name: String, 
      birthday: String, 
      img: String, 
      nickname: String
})

let BBmodel = mongoose.model('bbcharacter', BBSchema)

module.exports = BBmodel