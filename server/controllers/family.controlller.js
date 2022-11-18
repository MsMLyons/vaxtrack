const Family = require('../model/Family');
const bcrypt = require('bcrypt');

const handleNewFamily = async (req, res) => {
    const {family} = req.body;
    if (!family) return res.status(400).json({'message': 'Family has not yet been created'});

const duplicate = await Family.findOne({familyname: family}).exec();
if (duplicate) return res.sendStatus(409);

try {
    const result = await Family.create({
        "familyName": familyName,
        "familyMembers": [User],
        "numberFamilyMembers": numberFamilyMembers
    })

    res.status(201).json({ 'success': 'New family ${family} created!'});
} catch (err) {
    res.status(500).json({'message': err.message});
}
}

module.exports = {handleNewFamily};

