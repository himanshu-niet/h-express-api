var express = require('express');
var router = express.Router(); 
const {signUp,signIn,otp,otpVerify}=require("../controller/user")

router.post('/signup',signUp);

router.post('/signin',signIn);

router.get('/otp',otp);

router.post('/otp',otpVerify);

// router.post('/add_category',addCategory);k

// router.post('/add_kitchen',addKitchen);

// router.post('/add_meal',addKitchen);









  

  

 module.exports = router;