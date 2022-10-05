const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/wish');
  },
  filename(req, file, cb) {
    const unigueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    cb(null, `${file.fieldname}-${unigueSuffix}.jpeg`);
  },
});

const upload = multer({ storage });

module.exports = upload;
