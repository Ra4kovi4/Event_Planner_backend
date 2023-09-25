const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const { CLOUD_NAME, CLOUD_KEY, CLOUD_SECRET } = process.env;

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUD_KEY,
    api_secret: CLOUD_SECRET,
});

const cloudUpload = cloudOptions => {
    const { fieldname, destFolder, transformation } = cloudOptions;
    const storage = new CloudinaryStorage({
        cloudinary: cloudinary,
        params: {
            folder: destFolder,
            allowed_formats: ['jpg', 'png'],
            transformation: transformation,
        },
    });

    const upload = multer({ storage });
    const result = upload.single(fieldname);

    return result;
};

module.exports = cloudUpload;
