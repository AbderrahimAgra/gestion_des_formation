const express = require('express')

const router = express.Router()

const {
    registerUser,
    loginUser,
    getMe
} = require('../controllers/UserController')

router.post('/register',registerUser)           
router.post('/',loginUser)           
router.get('/me',getMe)           
// router.route('/user/:id').delete(deleteUser).put(updateUser)

module.exports = router