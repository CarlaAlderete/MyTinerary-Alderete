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
        password: joi.string().trim().min(5).required().messages({
            'string.min': 'This field must be at least 8 characters long',
            'string.max': 'This field must have a max of 15 characters',
            'string.pattern.base': 'Min 5 characters',
            'string.empty':'Data cannot be empty'
        }),
        src: joi.string().trim().min(10).required().messages({
            'string.min': 'This field must be at least 10 characters long',
            'string.empty':'Data cannot be empty',
        }),
        country: joi.string().trim().required().messages({
            'string.empty':'Data cannot be empty'
        }),
        google: joi.boolean()
    })
    const validation = schema.validate(req.body,{abortEarly:false})
    if(!validation.error){
        next()
    }else{
        res.json({success:false, res:validation.error.details})
    }
}

module.exports = validator