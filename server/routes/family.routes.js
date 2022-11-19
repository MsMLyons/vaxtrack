const express = require('express');

const familyRoutes = express.Router();

const dbo = require('../db/conn');

const ObjectId = require('mongodb').ObjectId;

// get a list of all family members
familyRoutes.route('/userDashboard').get(function (req, res) {
    let db_connect = dbo.getDb('vaxtrack');
    db_connect
        .collection('family') 
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// get one family record by id
familyRoutes.route('/update/:id').post(function (req, res) {
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
    .collection('family')
    .updateOne(myQuery, newVaccine, function (err, res) {
        if (err) throw err;
        console.log('One document updated successfully');
        response.json(res);
    });
});

// delete a family member 
familyRoutes.route('/:id').delete((req, res) => {
    let db_connect = dbo.getDb();
    let myQuery = { _id: ObjectId(req.params.id) };
    db_connect.collection('family').deleteOne(myQuery, function (err, obj) {
        if (err) throw err;
        console.log('One document deleted successfully');
        response.json(obj);
    });
});

//add a family member

module.exports = familyRoutes;