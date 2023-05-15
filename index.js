const express = require("express");
var cors = require('cors')
const router = require('./router');
const setupDB = require('./db/db-setup')
var cors = require('cors')
setupDB();

const app = express();
app.use(cors())
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => res.status(200).json({ message: "welcome" }));
app.use(router);


app.listen(8080, () => console.log("Server Started at http://localhost:8080/ ....."));