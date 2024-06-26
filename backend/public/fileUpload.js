const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public');
    },
    filename: function (req, file, cb) {
        cb(
            null,
            new Date().toISOString().replace(/:/g,'-') + "-" + file.originalname
        );
    }
});

function fileFilter(req, file, cb) {
    if (
        (file.fieldname === 'image' && (
            file.mimetype === 'image/png' ||
            file.mimetype === 'image/jpg' ||
            file.mimetype === 'image/jpeg'
        )) ||
        (file.fieldname === 'resume' && file.mimetype === 'application/pdf')
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({ storage, fileFilter });

const fileSizeFormatter = (bytes, decimal) => {
    if (bytes === 0) {
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + " " + sizes[index];
};

module.exports = { upload, fileSizeFormatter };
