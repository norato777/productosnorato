const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
require("../db");

app.use(express.json());

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

module.exports = app;
