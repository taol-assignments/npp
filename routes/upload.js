const express = require('express');
const multer = require('multer');

let router = express.Router();

router.post('/', multer({
    dest: __dirname + "/../uploads"
}).single("upload"), function (req, res, next) {
    console.log(req.file.path);
    res.write('success');
    res.end();
});

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('upload', {
        title: "Nature's Palette"
    })
});

module.exports = router;