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
            res.json(result);
        });
});

// get one vaccine record by id
vaccineRoutes.route('/update/:id').post(function (req, res) {
    let db_connect = dbo.getDb();
    let myQuery = { _id: ObjectId(req.params.id) };
    let newVaccine = {
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
    .updateOne(myQuery, newVaccine, function (err, res) {
        if (err) throw err;
        console.log('One document updated successfully');
        response.json(res);
    });
});

// delete a vaccination record
vaccineRoutes.route('/:id').delete((req, res) => {
    let db_connect = dbo.getDb();
    let myQuery = { _id: ObjectId(req.params.id) };
    db_connect.collection('vaccines').deleteOne(myQuery, function (err, obj) {
        if (err) throw err;
        console.log('One document deleted successfully');
        response.json(obj);
    });
});

module.exports = vaccineRoutes;