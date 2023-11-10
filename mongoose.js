const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config();

const pass= process.env.MONGOPASS
const account = process.env.MONGOACCOUNT
const cluster = process.env.MONGOCLUSTER 
const database = process.env.DATABASE
const url = `mongodb+srv://${account}:${pass}${cluster}/${database}`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const db= mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open',()=> console.log('Moongose Berhasil Terhubung'))