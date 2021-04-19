// 1. connect to your DB
require('../db')

// 2. require the model
let MyModel = require('../models/BB.model')


// 3. add data to the model
const axios = require('axios')

axios.get('https://breakingbadapi.com/api/characters')
  .then((response) => {
    // the actual api response will always be inside the 'data' key
    // console.log(response.data)

    return MyModel.create(response.data)
  })
  .then(() => {
      console.log('Data seeded')
      mongoose.connection.close()
  })
  .catch((err) => {
      console.log('ERROR: ', err)
      mongoose.connection.close()
  })
