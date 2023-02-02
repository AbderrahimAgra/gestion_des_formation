const express = require('express')
const router = express.Router()
const {
    getFormations,
    setFormation,
    updateFormation,
    deleteFormation,
    
} = require('../controllers/formation.controller')



router.route('/').get(getFormations).post(setFormation)
router.route('/:id').put(updateFormation).delete(deleteFormation)

module.exports = router