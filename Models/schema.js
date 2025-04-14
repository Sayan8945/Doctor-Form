const mongoose = require("mongoose");
const { type } = require("os");
const Schema = mongoose.Schema;

let patientSchema = new Schema({
    name: { firstName: String, middleName: String, lastName: String},
    adress: String,
    birth: Date,
    blood: String,
    age: Number,
    mobile: Number,
    doctor: String,
    time: Date,
    token: Number
})

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;