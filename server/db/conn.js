const { MongoClient } = require('mongodb');
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            // verify db connection
            if (db)
            {
                _db = db.db("vaxtrack");
                console.log("Successfully connected to MongoDB");
            }
            return callback(err);
        });
    },

    getDb: function () { 
        return _db;
    },
};