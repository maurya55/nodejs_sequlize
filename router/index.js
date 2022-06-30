const express = require("express");

var router = express.Router();
const indexController = require('../controller/indexController');




/**
* @swagger
* /:
*  get:
*     summary  : this is summary
*     description : this is description
*     responses :
*       200 :  
*              description: To test Get method
*/

router.get("/", (req, res) => {
    console.log("testing");
    return res.send("<h1>docker is awesome 3</h1>")
})



router.post('/userInsert', indexController.userInsert);
router.post('/postInsert', indexController.postInsert);

router.get('/userRead',indexController.userGet);
router.get('/postRead',indexController.postGet);





// exmaple 


// get data with parament data

/**
* @swagger
* /update/{id}:
*  get:
*     summary  : this is summary
*     description : this is description
*     parameters:
*       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
*     responses :
*       200 :  
*              description: To test Get method
*              
*/

// router.post('/update/:id', indexController.insert);





// post data


/**
* @swagger
* /updatepost:
*  post:
*     summary  : this is summary
*     description : this is description
*     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The user's name.
 *                 example: Leanne Graham
 *               email:
 *                 type: string
 *                 description: The user's email.
 *                 example: email
*     responses :
*       200 :  
*              description: To test Get method
*              
*/


module.exports = router;