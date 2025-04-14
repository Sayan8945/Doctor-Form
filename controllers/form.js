const Patient = require("../Models/schema");

module.exports.index = (req,res)=>{
    res.render("index");
}

module.exports.data = async (req,res)=>{
    let user = req.body.user;
    let size = await Patient.countDocuments("");
    user.token = size + 1;
    let patient;
    await Patient.insertOne(user).then(res => {patient = res});  
    res.redirect(`/patient/${patient._id}`);
}

module.exports.user = async (req,res)=>{
    let {id} = req.params;
    let patient = await Patient.findById(id);
    console.log(patient);
    patient.time =  new Date();
    res.render("user", {patient});
}