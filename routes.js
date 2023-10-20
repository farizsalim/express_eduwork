const router = require('express').Router();

router.get('/', (req,res) => {
    res.send({
        status: 'Successfully',
        message: 'Welcome to Server Express JS'
    })
})

router.get('/komik/:idkomik/:chapter', (req,res) => {
    const {idkomik,chapter} = req.params;
    console.log(req.query);
    res.json({
        idkomik: idkomik,
        chapter: chapter
    })
})

module.exports = router;