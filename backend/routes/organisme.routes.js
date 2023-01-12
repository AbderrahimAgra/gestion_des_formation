const express = require('express')


const router = express.Router()

const {
    getAllOrganismes,
    getOrganisme,
    addOrganisme,
    deleteOrganisme,
    updateOrganisme
} = require('../controllers/organisme.controller')

const { protect } = require('../middleware/authMiddleware')

      
router.get('/', protect, getAllOrganismes)         
router.get('/:id', protect, getOrganisme)         
router.post('/', protect, addOrganisme)         
router.put('/:id', protect, updateOrganisme)         
router.delete('/:id', protect, deleteOrganisme)         

module.exports = router