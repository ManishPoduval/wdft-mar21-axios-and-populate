const router = require("express").Router();
const axios = require('axios')
let API_KEY = process.env.NASA_API_KEY

/* GET home page */
router.get("/mars", (req, res, next) => {
      //1. get data from axios

      axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`)
        .then((response) => {
            // all info/response inside the `data` key

            //2. render the data to the users
            res.render('marspics.hbs', {pics: response.data.photos})
        })
        .catch((err) => {
            console.log('ERROR: ', err)
        })
});

module.exports = router;
