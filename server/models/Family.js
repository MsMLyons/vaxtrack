const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FamilySchema = new Schema ({
    user_id: {
        type: integer
    },
    familyname: {
        type: String,
        required: true
    },
    numberFamilyMembers: {
        type: Number
    },
    familyMembers: {
        users: [User]
    }


});

const Family = mongoose.model("Family", FamilySchema);

module.exports = mongoose.model('Family', familySchema);