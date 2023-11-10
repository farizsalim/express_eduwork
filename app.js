require('./mongoose')
const express = require('express');
const app = express();
const router = require('./routes');
const log = require('./middleware/logger');
const path = require('path');
const cors = require('cors')
const productMongo = require('./mongoproduct/routes')
const mongooseRoutes = require('./mongoose/routes')

app.use(cors())
app.use(log);
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'uploads')))
app.use(router);
app.use('/mongo', productMongo)
app.use('/mongoose', mongooseRoutes)
app.use((req,res,next)=>{
    res.status(404)
    res.send({
        status:"failed",
        message: req.originalUrl + ' notfound'
    })
})

app.listen(port = 3000,() => console.log(`Server: http://localhost:${port}`))