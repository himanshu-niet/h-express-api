const mongoose = require('mongoose');

const userData = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    phone:{
        required: true,
        type: String,
    },
    pass:String
})

const user=new mongoose.Schema({
    number:{
        type:String,
        required:true,
    password:{
        type:String,
        required:true
    }
    }},
    {timestamps:true})

const otp = new mongoose.Schema({
    number: {
        required: true,
        type: String
    },
    OTP:{
        required: true,
        type: String
    },
    createdAt:{type:Date,default:Date,index:{expires:300}}
},{timestamps:true})

const category=new mongoose.Schema({
    name:String,
    kitchen:[]
})

const kitchen=new mongoose.Schema({
    name:String,
    userName:String,
    chef_name:String,
    rating:Number,
    image:String,
    meals:[]
})

const meals=new mongoose.Schema({
    name:String,
    price:Number,
    type:String, //vegs and nonveg
    desc:String,
    kitchen_id:String

})

const order=new mongoose.Schema({
    order_id:Number,
    cust_id:Number,
    meal_id:Number,
    quantity:Number,
    date:String,
    price:Number
})

const cart=new mongoose.Schema({
    cart_id:Number,
    cust_id:Number,
    meal_id:Number,
    quantity:Number,
    date:String
})

const review=new mongoose.Schema({
    review_id:Number,
    summary:String,
    date:String,
    cust_id:String
})
const wishlist=new mongoose.Schema({
    meal_id:String,
    date:String,
    cust_id:String
})
const faqs=new mongoose.Schema({
    question:String,
    answer:String,
    date:String,
})
const tac=new mongoose.Schema({
    desc:sting
})


const User = mongoose.model("User", user);
const Review = mongoose.model("Review", review);
const Cart = mongoose.model("Cart", cart);
const Order = mongoose.model("Order", order);
const Meals = mongoose.model("Meals", meals);
const Kitchen = mongoose.model("Kitchen", kitchen);
const Category = mongoose.model("Category", category);
const UserData = mongoose.model("UserData", userData);
const Otp = mongoose.model("Otp", otp);

module.exports = { UserData,User,Otp,Category,Kitchen,Meals,Order,Cart,Review };