const User = require('../models/User')
const bcryptjs = require('bcryptjs')

const userControllers={
    addNewUser:async(req,res)=>{
        const {name, lastName, mail, password, src, country} = req.body
        const hashedPassword = bcryptjs.hashSync(password)
        const newUser = new User({name, lastName, mail, password:hashedPassword , src, country})
        try{
            let repeatUser = await User.findOne({mail: mail})
            if(repeatUser){
                throw new Error('mail is being used with another account')
            }await newUser.save()
            res.json({success:true, res:newUser})
        }catch(err){
            res.json({success:false, res:err.message})
        }
    },
    singInUser:async(req,res)=>{
        const {mail, password} = req.body
        try{
            let userExist = await User.findOne({mail: mail})
            if(!userExist){
                throw new Error('The data entered is not valid. Please, try again.') 
            }
            let match=bcryptjs.compareSync(password,userExist.password)
            if(!match){
                throw new Error('The data entered is not valid. Please, try again.')}
            res.json({success:true})
        }catch(err){
            res.json({success:false, res:err.message})
        }
    },
    getUsers:async(req,res)=>{
        try{
            let allUsers = await User.find()
            res.json({success:true, res:allUsers})
        }catch(err){
            res.json({success:false, res:err.message})
        }
    }
}

module.exports = userControllers