const express = require('express');
const multer = require('multer');
const upload = multer({ dest: '/tmp/' });
const router = express.Router();

router.post('/fileanalyse', upload.any(), (req, res, next) => {
  console.log(req.files[0])
  if (req.files.length === 1) {
    let file = req.files[0]
    res.json({
      name: file['originalname'],
      type: file['mimetype'],
      size: file['size']
    });
  } else if (req.files.length >= 1) {
    let fileInfo = req.files.map(file => Object.freeze(
      {
        name: file['originalname'],
        type: file['mimetype'],
        size: file['size']
      }));
    res.json(fileInfo)
  }
})

module.exports = router
