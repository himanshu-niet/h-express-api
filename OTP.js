const bcrypt = require("bcrypt")
const _= require("lodash")
const fast2sms = require('fast-two-sms')


const {User,Otp}=require("./model/models")

module.exports.signUp=async (req,res)=>{
    const number=req.body.number;


    var options = {
        authorization:
          "un15iBLXSj8EloM2OVgCIZ4bTfRkxd9QY0Ky7cmqNaP6HDtvGp1mblRZ3F7zoIKfJD9syLPxWBvH6NGc",
        message:"Homians",
        numbers: [9891481974],
      };
   
      // send this message
   
      fast2sms
        .sendMessage(options)
        .then((response) => {
          res.send(response.Otp)
        })
        .catch((error) => {
          res.send("Some error taken place")
        });
}

module.exports.verifyOtp=async (req,res)=>{
    
}