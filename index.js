const express = require("express");
const router = require('./router');
const setupDB = require('./db/db-setup')
setupDB();

const app = express();
app.use(express.json());
app.get("/", (req, res) => res.status(200).json({ message: "welcome" }));
app.use(router);


app.listen(8080, () => console.log("Server Started..."));