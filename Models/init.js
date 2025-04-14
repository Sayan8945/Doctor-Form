const mongoose = require("mongoose");
const Patient = require("./schema");
const dbURL = process.env.ATLASDB_URL;

main(() => console.log("connected with DocForm")).catch(err => console.log(err));
async function main() {
  await mongoose.connect(dbURL);
}
let patient1 = {
    name: { firstName: 'Ram', middleName: 'Gopal', lastName: 'Sarkar' },
    adress: 'coochbehar ',
    birth: '2025-04-04',
    blood: 'A-',
    age: 34,
    mobile: 8945409710,
    doctor: 'Sarupyo',
    token: 0,
}
const initDB = async () => {
    let data;
    await Patient.deleteMany({});
    await Patient.insertOne(patient1).then(res => {data = res});
    console.log("data insertion successful");
    console.log(data);
}
initDB();