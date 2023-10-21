const router = require('express').Router();
const multer = require('multer')
const upload = multer({dest: 'uploads'})
const fs = require('fs')
const path = require('path')

router.get('/', (req,res) => {
    res.send({
        status: 'Successfully',
        message: 'Welcome to Server Express JS',
        command: 'add /komik/randomnumber/randomnumber'
    })
})

router.get('/komik/:judul/:chapter', (req,res) => {
    const {judul,chapter} = req.params;
    res.json({
        judul,
        chapter,
    })
})


router.post('/komik/', upload.single('cover') ,(req,res) => {
    const {judul,chapter} = req.body;
    const cover = req.file
    if(cover) {
        const target = path.join(__dirname, 'uploads', cover.originalname);
        fs.renameSync(cover.path, target)
        res.json({
            judul,
            chapter,
            cover
        })
    }
})


module.exports = router;