const router = require("express").Router();

/* GET home page */

let BBModel = require('../models/BB.model')
router.get("/characters", (req, res, next) => {
    // 1. find all the chracters

    BBModel.find()
      .then((characters) => {
        // 2. Render a HBS file with the characters
          res.render('bbcharacters.hbs', {people: characters})
      })
      .catch((err) => {

      })



    

});

module.exports = router;
