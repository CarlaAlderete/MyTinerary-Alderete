const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userControllers={
    addNewUser:async(req,res)=>{
        const {name, lastName, mail, password, src, country} = req.body
        const hashedPassword = bcryptjs.hashSync(password)
        const newUser = new User({name, lastName, mail, password:hashedPassword , src, country})
        try{
            let repeatUser = await User.findOne({mail: mail})
            if(repeatUser){
                throw new Error('Mail is being used with another account')
            }await newUser.save()
            let token = jwt.sign({...newUser}, process.env.SECRETOKEN)
            res.json({success:true, res:{name:newUser.name,photo:newUser.src,token}})
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
            let token = jwt.sign({...userExist}, process.env.SECRETOKEN)
            res.json({success:true, res:{name:userExist.name,photo:userExist.src,token}})
        }catch(err){
            res.json({success:false, res:err.message})
        }
    },
    forcedSignIn:(req,res)=>{
        res.json({name: req.user.name, photo:req.user.src})
    }
}

module.exports = userControllers