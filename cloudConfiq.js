const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    colud_name :process.env.CLOUS_NAME,
    api_key :process.env.CLOUD_API_KEY,
    api_secet :process.env.CLOUD_API_SECRET
})