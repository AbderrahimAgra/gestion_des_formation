const asyncHandler = require('express-async-handler')
const Organisme = require('../models/Organisme')

// @desc Get all Organismes Data
// @route Get /api/organisme
// @access Private
const getAllOrganismes = asyncHandler(async (req ,res )=>{
    let organismes = await Organisme.find();
    res.status(200).json(organismes);
})

// @desc Get one organisme Data
// @route Get /api/organisme/:id
// @access Private
const getOrganisme = asyncHandler(async (req ,res )=>{
    const {id} = req.params;
    const organisme = await Organisme.findOne({_id:id})
    res.status(200).json(organisme);
})

// @desc Add Organisme
// @route Get /api/organisme/:id
// @access Private
const addOrganisme = asyncHandler(async (req ,res )=>{
    let organisme = await Organisme.create({
        users:req.body.users,
        name:req.body.name
    });
    res.status(200).json(organisme);
})

// @desc Update Organisme
// @route Get /api/organisme/:id
// @access Private
const updateOrganisme = asyncHandler(async (req ,res )=>{
    const organisme = await Organisme.findById(req.params.id)
    
    if (!organisme){
        res.status(400)
        throw new Error('Organisme not found')
    }
    
    let updatedOrganisme = await Organisme.findByIdAndUpdate(req.params.id,{
        users:req.body.users,
        name:req.body.name
    }, {new: true});
    res.status(200).json(updatedOrganisme);
})

// @desc Delete Organisme
// @route Get /api/organisme/:id
// @access Private
const deleteOrganisme = asyncHandler(async (req ,res )=>{
    const organisme = await Organisme.findById(req.params.id)

    if (!organisme){
        res.status(400)
        throw new Error('Organisme not found')
    }

    await organisme.remove();

    res.status(204).json({id: req.params.id});
})

module.exports = {
    getAllOrganismes,
    getOrganisme,
    addOrganisme,
    updateOrganisme,
    deleteOrganisme
}