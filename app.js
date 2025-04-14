if (process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const methodOverride = require('method-override');
engine = require('ejs-mate');
const mongoose = require('mongoose');
const Patient = require("./Models/schema");
const formController = require("./controllers/form");
const dbURL = process.env.ATLASDB_URL;
const { MongoClient } = require('mongodb');
const session = require('express-session');
const MongoStore = require('connect-mongo');

app.set("view engine", "ejs");
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.engine('ejs', engine);


main(() => console.log("connected with DocForm")).catch(err => console.log(err));
async function main() {
  await mongoose.connect(dbURL);
}

app.listen(port, (req,res)=> {
    console.log("listening to the port...");
})
app.get("/", formController.index);
app.post("/data", formController.data);
app.get("/patient/:id", formController.user);