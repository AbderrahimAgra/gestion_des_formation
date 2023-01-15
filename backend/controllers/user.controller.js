const asyncHandler = require('express-async-handler')
const User = require('../models/User')

// @desc Get user data
// @route Get /api/user/me
// @access Private
const getMe = asyncHandler(async (req, res) => {
    const { _id, firstname, email } = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        firstname,
        email,
    })
})

// @desc Get all Users Data
// @route Get /api/user
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
    let users = await User.find();
    res.status(200).json(users);
})

// @desc Get one Users Data
// @route Get /api/user/:id
// @access Private
const getUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = await User.findOne({ _id: id })
    res.status(200).json(user);
})

// @desc Add User
// @route Get /api/user/:id
// @access Private
const addUser = asyncHandler(async (req, res) => {
    let users = await User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        organisme: req.body.organisme,
        formations: req.body.formation
    });
    res.status(200).json(users);
})

// @desc Update User
// @route Get /api/user/:id
// @access Private
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id,
        {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            organisme: req.body.organisme,
            formations: req.body.formation
        }
        , { new: true })

    res.status(200).json(updatedUser);
})

// @desc Delete User
// @route Get /api/user/:id
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)

    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }

    await user.remove();

    res.status(204).json({ id: req.params.id });
})

module.exports = {
    getMe,
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
}