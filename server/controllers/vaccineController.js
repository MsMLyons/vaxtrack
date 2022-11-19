/*const Vaccine = require('../models/vaccineModel')
const mongoose = require('mongoose')

// get all vaccine records

const getVaccines = async (req, res) => {
    const vaccines = await Vaccine.find({}).sort({dateGiven: -1})

    res.status(200).json(vaccines)
}

// get one vaccine record

const getVaccine = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such vaccine recorded in the database'})
    }

    const vaccine = await Vaccine.findById(id)

    if (!vaccine) {
        return res.status(404).json({error: 'No such vaccine'})
    }

    res.status(200).json(vaccine)
}

// create a new vaccine record

const createVaccine = async (req, res) => {
    const {vaccineName, dateGiven, dose, expiration, manufacturer, medicalProfessional, frequency, description} = req.body

    // add to the database
    try {
        const vaccine = await Vaccine.create({ vaccineName, dateGiven, dose, expiration, manufacturer, medicalProfessional, frequency, description })
        res.status(200).json(vaccine)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a vaccine record

const deleteVaccine = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Cannot find - no such vaccine in the database'})
    }

    const vaccine = await Vaccine.findOneAndDelete({ _id: id})

    if(!vaccine) {
        return res.status(404).json({error: 'Cannot delete - no such vaccine in the database'})
    }
    
    res.status(200).json(vaccine)
}

// update a vaccine record 

const updateVaccine = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Cannot find and update - no such vaccine in the database'})
    }

    const vaccine = await Vaccine.findOneAndUpdate({ _id: id})

    if(!vaccine) {
        return res.status(404).json({error: 'Cannot update - no such vaccine in the database'})
    }

    res.status(200).json(vaccine)
}

module.exports = {
    getVaccines,
    getVaccine,
    createVaccine,
    deleteVaccine,
    updateVaccine
}*/