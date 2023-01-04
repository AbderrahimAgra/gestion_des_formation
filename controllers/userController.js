const asyncHandler = require('express-async-handler')
const User = require('../models/User')
const role = require('../models/Role')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// @desc Register new user
// @route POST /api/users
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
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('invalid user data')
    }
})
// @desc Authentecate a user
// @route Post /api/users/login
// @access Public
const loginUser = asyncHandler( async (req, res) => {
    const { email, password } = req.body

    //check for email
    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))) {
       res.status(201).json({
        _id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        token: generateToken(user._id),
       }) 
    } else {
        res.status(400)
        throw new Error ('invalide credentials')
    }
})
// @desc Get user data
// @route Get /api/users/me
// @access Public
const getMe = asyncHandler( async (req, res) => {
    res.json({message: 'User data desplay'})
})

//generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}