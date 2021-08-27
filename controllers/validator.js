const joi = require('joi')

const validator = (req, res, next)=>{
    const schema = joi.object({
        name: joi.string().trim().min(2).max(30).required().pattern(new RegExp('[a-zA-Z]$')).messages({
            'string.min': 'This field must be at least 2 characters long',
            'string.max':'This field must have a max of 30 characters',
            'string.pattern.base': 'Name cannot have a number',
            'string.empty':'Data cannot be empty'
        }),
        lastName: joi.string().trim().min(2).max(30).required().pattern(new RegExp('[a-zA-Z]$')).messages({
            'string.min': 'This field must be at least 2 characters long',
            'string.max': 'This field must have a max of 30 characters',
            'string.pattern.base': 'Last name cannot have a number',
            'string.empty':'Data cannot be empty'
        }),
        mail: joi.string().trim().required().email().required().messages({
            'string.email':'The email is not valid',
            'string.empty':'Data cannot be empty'
        }),
        password: joi.string().trim().max(15).pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{5,}$')).required().messages({
            'string.min': 'This field must be at least 8 characters long',
            'string.max': 'This field must have a max of 15 characters',
            'string.pattern.base': 'Min 5 characters, at least one letter, one number and one special character',
            'string.empty':'Data cannot be empty'
        }),
        src: joi.string().trim().min(10).required().messages({
            'string.min': 'This field must be at least 10 characters long',
            'string.empty':'Data cannot be empty',
        }),
        country: joi.string().trim().required().messages({
            'string.empty':'Data cannot be empty'
        }),
    })
    const validation = schema.validate(req.body,{abortEarly:false})
    if(!validation.error){
        next()
    }else{
        console.log(validation.error.details)
        res.json({success:false, res:validation.error.details})
    }
}
//Mínimo 5 caracteres, al menos una letra mayuscula,una minuscula un número y un carácter especial:
module.exports = validator