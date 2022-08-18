var express = require('express');
var router = express.Router(); 
const {signUp,signIn}=require("../controller/user")

router.post('/signup',signUp);

router.post('/signin',signIn);


// router.post('/add_category',addCategory);

// router.post('/add_kitchen',addKitchen);

// router.post('/add_meal',addKitchen);









  

  

 module.exports = router;