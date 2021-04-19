require('../db')


let PostModel = require('../models/Posts.model')
const mongoose = require('mongoose')


// we're mimicking a scenario where a user will create a post
PostModel.create([
  {message: 'Hello', userId: '607d855c83e4453f3c4d9cb2'},
  {message: 'By Luis', userId: '607d855c83e4453f3c4d9cb3'}
])
  .then(() => {
    console.log('Posts seeded')
    mongoose.connection.close()
  })
  .catch((err) => {
    console.log('ERROR: ', err)
    mongoose.connection.close()
  })
