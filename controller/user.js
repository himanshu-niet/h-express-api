const {UserData,Otp}=require("../model/models")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const secret_key=process.env.SECRET_KEY

exports.signUp=async(req,res)=>{
    const {name,phone,password}=req.body;
    
    try {
      
const existingUser=await UserData.findOne({phone:phone})
if(existingUser){
    return res.status(400).json({messege:"User Already Exists"})
}

const hashedPassword=await bcrypt.hash(password,10)

const result=await UserData.create({
    name:name,
    phone:phone,
    password:hashedPassword
})



const token=jwt.sign({phone:phone,id:result._id},secret_key)
return res.status(200).json({user:result,token:token})

    } catch (error) {
        return res.status(500).json({messege:"Something Went Wrong"})

    }



     }




exports.signIn= async(req,res)=>{
    const {phone,password}=req.body
    try {
    
        const existingUser=await UserData.findOne({phone:phone})
        if(!existingUser){
            return res.status(400).json({messege:"User Not Found"})
        }
        
        const matchedPassword=await bcrypt.compare(password,existingUser.password)
        
        if(!matchedPassword){
            return res.status(400).json({messege:"Invalid Credentials"})
        }
        
      
        const token=jwt.sign({phone:existingUser.phone,id:existingUser._id},secret_key)
        console.log(token)
        return res.status(200).json({user:existingUser,token:token})

    } catch (error) {
        return res.status(500).json({messege:"Something Went Wrong"})

    }
   }


   exports.otp= async(req,res)=>{
    const phone=req.query.phone
    const OTP=Math.floor(Math.random()*(9999 - 1000) + 1000)
    try {
        const existingUser=await Otp.findOne({number:phone})
        if(existingUser){
            return res.status(400).json({messege:"Phone Number Already Registered"})
        }
        
        const result=await Otp.create({
            number:phone,
            OTP:OTP
        })
    
        return res.status(200).json({user:result,messege:"OTP Send Successfuly"})

    } catch (error) {
        return res.status(500).json({messege:"Something Went Wrong"})

    }
   }

   exports.otpVerify= async(req,res)=>{
    const {phone,OTP}=req.body
    try {
    
        const existingNumber=await Otp.findOne({number:phone})
        if(!existingNumber){
            return res.status(400).json({messege:"User Not Found"})
        }
        

        if(existingNumber.OTP==OTP){
            return res.status(200).json({messege:"Otp Verification Successful"})
 }
        
        return res.status(400).json({messege:"Otp Verification Failed"})


    } catch (error) {
        return res.status(500).json({messege:"Something Went Wrong"})

    }
   }