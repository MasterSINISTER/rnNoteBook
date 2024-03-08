const express=require('express')
const bcrypt=require('bcryptjs')
const User=require('../models/User')
const router=express.Router();
const {validationResult, body } = require('express-validator');
var jwt = require('jsonwebtoken');
var fetchuser=require('../middleware/fetchuser')
const JWT_SECRET="Rishabhisagoodb$oy"

//ROUTE 1: Create a User using POST "/api/auth". Doesnt Require Auth
router.post('/createuser' ,[
    body("name","Enter a Valid Name").isLength({min:3}),
    body("email","Enter a Valid Email").isEmail(),
    body("password","Password must be atleast 5 Characters").isLength({min:5}),
],async (req,res)=>{
    const errors=validationResult(req);
    //Check for Duplicate Emails
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    try {
        let user=await User.findOne({email:req.body.email});
        if(user){
            return res.status(400).json({error:"Sorry a user with this email already exists"})
        }
        var salt = bcrypt.genSaltSync(12);
        var hash = bcrypt.hashSync(req.body.password, salt);
        user=await User.create({
            name:req.body.name,
            password:hash,
            email:req.body.email,
            
        })
        const data={
            user:{
                id:user.id
            }
        }
    const authToken=jwt.sign(data,JWT_SECRET);
    
    res.json({authToken})
        
    } catch (error) {
        console.error(error.message);
        res.status(300).json("Something Went Wrong !")
    }
    

})
//ROUTE 2 : Authenticate a user using POST 
router.post('/login' ,[
    body("email","Enter a Valid Email").isEmail(),
    body("password","Password cant be Blank").exists(),
],async (req,res)=>{

const errors=validationResult(req);
 if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

const {email,password}=req.body;
try {
    let user=await User.findOne({email});
    if(!user){
        return res.status(400).json({error:"Please Check Credentials !"})
    }
    const passwordCompare=await bcrypt.compare(password,user.password);
    if(!passwordCompare){
        return res.status(400).json({error:"Please Check Credentials !"})
    }

    const payload={
        user:{
            id:user.id
        }
    }
const authToken=jwt.sign(payload,JWT_SECRET);
res.send({authToken})

} catch (error) {
    console.error(error.message);
    res.status(300).json("Something Went Wrong !")
}
});

//ROUTE 3: Get Details of the User using POST "/api/auth". Login Require
router.post('/getuser' ,fetchuser,async (req,res)=>{


try {
    let userId=req.user?.id;
    const user=await User.findById(userId).select("-password")
    res.send(user)
} catch (error) {
    console.error(error.message);
    res.status(300).json("Something Went Wrong !")
}

})

module.exports=router;