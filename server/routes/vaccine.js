const { response } = require('express');
const express = require('express');

const vaccineRoutes = express.Router();

const dbo = require('../db/conn');

const ObjectId = require('mongodb').ObjectId;

// get a list of all vaccines
vaccineRoutes.route('/vaccine').get(function (req, res) {
    let db_connect = dbo.getDb('vaxtrack');
    db_connect
        .collection('vaccines') // vaccines plural or singular vaccine?
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            console.log('Success! Vaccine records found!');
            res.json(result);
        });
});

// get one vaccine record by id
vaccineRoutes.route('vaccine/:id').get(function (req, res) {
    let db_connect = dbo.getDb();
    let vaccineList = { _id: ObjectId(req.params.id) };
    db_connect
        .collection('vaccines')
        .findOne(vaccineList, function(err, result) {
            if (err) throw err;
            console.log('Vaccine record retrieved successfully');
            res.json(result);
        });
});

// add a new vaccine record 
vaccineRoutes.route('/vaccine/add').post(function (req, res) {
    let db_connect = dbo.getDb();    
    let newVaccine = {
        vaccineName: req.body.vaccineName,
        dateGiven: req.body.dateGiven,
        dose: req.body.dose,
        expiration: req.body.expiration,            
        manufacturer: req.body.manufacturer,
        medicalProfessional: req.body.medicalProfessional,
        frequency: req.body.frequency,
        description: req.body.description,
    };
    db_connect
    .collection('vaccines')
    .insertOne(newVaccine, function (err, res) {
        if (err) throw err;
        console.log('New vaccine added successfully');
        response.json(res);
    });
});

// update a vaccine record
vaccineRoutes.route('/update/:id').post(function (req, res) {
    let db_connect = dbo.getDb();
    let myQuery = { _id: ObjectId(req.params.id) };
    let newVaccineValues = {
        $set: {
            vaccineName: req.body.vaccineName,
            dateGiven: req.body.dateGiven,
            dose: req.body.dose,
            expiration: req.body.expiration,            
            manufacturer: req.body.manufacturer,
            medicalProfessional: req.body.medicalProfessional,
            frequency: req.body.frequency,
            description: req.body.description,
        },
    };
    db_connect
        .collection('vaccines')
        .updateOne(myQuery, newVaccineValues, function (err, res) {
            if (err) throw err;
            console.log('Vaccine successfully updated');
            response.json(res);
        })
})


// delete a vaccination record
vaccineRoutes.route('/:id').delete((req, res) => {
    let db_connect = dbo.getDb();
    let deleteVaccine = { _id: ObjectId(req.params.id) };
    db_connect.collection('vaccines').deleteOne(deleteVaccine, function (err, obj) {
        if (err) throw err;
        console.log('One document deleted successfully');
        response.json(obj);
    });
});

module.exports = vaccineRoutes;