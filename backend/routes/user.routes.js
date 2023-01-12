const express = require('express')


const router = express.Router()

const {
    getMe,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    addUser
} = require('../controllers/user.controller')

const { protect } = require('../middleware/authMiddleware')

    
// router.get('/me', protect, getMe)           
router.get('/me', protect, getMe)           
router.get('/', protect, getAllUsers)         
router.get('/:id', protect, getUser)         
router.post('/', protect, addUser)         
router.put('/:id', protect, updateUser)         
router.delete('/:id', protect, deleteUser)         
// router.route('/user/:id').delete(deleteUser).put(updateUser)

module.exports = router