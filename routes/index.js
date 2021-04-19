const router = require("express").Router();

let PostModel = require('../models/Posts.model')
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

//.populate()

// works only with find Methods

router.get("/facebuk", (req, res, next) => {
  //Note: populate() takes the schema key as a parameter that has a reference to another collection. 

      // without Populate your output would look like
      /*
      {
          "_id": "602140658a88173fd8c44665",
          "message": "This was hard to grasp",
          "userId": "602135a74a545b1d9c80adc0",
          "__v": 0
      }
      */

     
      // With populate it basically will 
       /*
       1. grab the value of that key, in our case "userId" , 
       2. look for the schema and see if has been referenced
       3. Find a value in that model same as the  value of "userId"
       4. and finnaly will popualte the result in the "userId" value itself
      */
      PostModel.find()
        .populate('userId')
        .then((data) => {
          // for simplicity of explaining we're using res.send
          res.send(data)
        })
        .catch((err) => {
          console.log('ERROR: ', err)
        })
       
      /*
      {
          "_id": "602140658a88173fd8c44665",
          "message": "This was hard to grasp",
          "userId": {
                "_id": "602135a74a545b1d9c80adc0",
                "name": "Ervin Howell",
                "email": "Shanna@melissa.tv",
                "phone": "010-692-6593 x09125",
                "__v": 0
          },
          "__v": 0
      }

      */
 

 
});

module.exports = router;
