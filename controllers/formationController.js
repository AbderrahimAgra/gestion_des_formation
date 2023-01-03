const asyncHandler = require('express-assync-handler')
// @desc Get formations
// @route GET /api/formation
// access Private 
const getFormations = asyncHandler(async (req , res) => {
if(!req.body.name) {
        res.status(400)
        throw new Error('please add a name field')
    }

    res.status(200).json({message: 'Get formations 🫖'})
})
// @desc set formations
// @route POST /api/formation/:id
// access Private 
const setFormation = asyncHandler( async (req , res) => {
    res.status(200).json({message: 'set formation 🫖'})
})
// @desc update formations
// @route PUT /api/formation/:id
// access Private 
const updateFormation = asyncHandler( async (req , res) => {
    res.status(200).json({message: `Update formation ${req.params.id}`})
})
// @desc delete formations
// @route DELETE /api/formation/:id
// access Private 
const deleteFormation = asynchandler( async (req , res) => {
    res.status(200).json({message: `delete formation ${req.params.id}`})
})


module.exports = {
    getFormations,
    setFormation,
    updateFormation,
    deleteFormation
}