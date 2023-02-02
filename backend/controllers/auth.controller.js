const asyncHandler = require('express-async-handler')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// @desc Register new user
// @route POST /api/user
// @access Public
const registerUser = asyncHandler( async (req, res) => {
    const { email, password, firstname ,lastname} = req.body
    if(!email || !password || !firstname || !lastname){
        res.status(400)
        throw new Error('Please add all fields')
    }
    //chek if user exists
    const userExists = await User.findOne({email})
    if(userExists) {
        res.status(400)
        throw Error('User already exists')
    }
    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    //Create User
    const user = await User.create({
        firstname,
        lastname,
        email,
        password: hashedPassword,
        organisme: req.body.organisme,
        formations: req.body.formation,
        role: 'admin'
    })
    if(user) {
        res.status(201).json({
            _id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            token: generatejwt(user._id)
        })
    } else {
        res.status(400)
        throw new Error('invalid user data')
    }
})
// @desc Authentecate a user
// @route Post /api/user/login
// @access Public
const loginUser = asyncHandler( async (req, res) => {
    const { email, password } = req.body
    //check for user
    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))) {
       res.status(200).json({
        _id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
        token: generatejwt(user._id)
       }) 
    } else {
        res.status(400)
        throw new Error ('invalide credentials')
    }
})
//generate JWT
const generatejwt = (id) =>{
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}
module.exports = {
    registerUser,
    loginUser
}