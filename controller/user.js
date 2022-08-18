const {UserData}=require("../model/models")

exports.signUp=(req,res)=>{
    const {name,phone,pass}=req.body;
   
    code=400
    msg="Error"
   
    if(name.length<3){
        msg="Name Error"
    }else if(phone.length!=10){
        msg="Phone djfghdjkbgdjbgdjkh"
    }else if(pass.length<8){
        msg="Password Error"
    }
    else{
       const userdata=new UserData({
        name:name,
        phone:phone,
        pass:pass
       });
      
      try {
        const dataToSave = userdata.save();
    
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message:error.message})   
    }
    }
    return res.status(code).json({message:msg})
}




exports.signIn= async(req,res)=>{
    const {phone,pass}=req.body;

    try{
        const dataToSave = await UserData.findOne().select({phone:phone,pass:pass});
res.send(dataToSave)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

