const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: "./config.env"});
const port = process.env.PORT || 5000;
app.use(cors()); // throws error: app.use is not a function
app.use(express.json());
app.use(require("./routes/vaccine")); // is this correct?

// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
    // connect to db when server starts
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
    });
    console.log(`Server is running on port: ${port}`);
});