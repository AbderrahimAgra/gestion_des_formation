const asyncHandler = require('express-async-handler')

const Formation = require('../models/Formation')

// @desc Get formations
// @route GET /api/formation
// access Private 
const getFormations = asyncHandler(async (req , res) => {
    const formations = await Formation.find()
    res.status(200).json(formations)
})
// @desc set formations
// @route POST /api/formation/:id
// access Private 
const setFormation = asyncHandler( async (req , res) => {
    if (!req.body.name) {
        res.status(400)
        throw new error('Please add a name field')
    }

    const formation = await Formation.create({
        name: req.body.name,
    })
    
    res.status(200).json(formation)
})
// @desc update formations
// @route PUT /api/formation/:id
// access Private 
const updateFormation = asyncHandler( async (req , res) => {
    const formation = await Formation.findById(req.params.id)

    if (!formation){
        res.status(400)
        throw new Error('Formation not found')
    }

    const updatedFormation = await Formation.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedFormation)
})
// @desc delete formations
// @route DELETE /api/formation/:id
// access Private 
const deleteFormation = asyncHandler( async (req , res) => {
    const formation = await Formation.findById(req.params.id)
    
    if (!formation) {
        res.status(400)
        throw new Error('formation not found')
    }
   
    await formation.remove()

    res.status(204).json({id: req.params.id})
    })



module.exports = {
    getFormations,
    setFormation,
    updateFormation,
    deleteFormation
}