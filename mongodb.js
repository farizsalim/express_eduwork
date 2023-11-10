const {MongoClient} = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const pass= process.env.MONGOPASS
const account = process.env.MONGOACCOUNT
const cluster = process.env.MONGOCLUSTER 
const url = `mongodb+srv://${account}:${pass}${cluster}`
const client = new MongoClient(url);

(async () => {
    try {
        await client.connect();
    console.log('koneksi mongodb berhasil')
    } catch (error) {
        console.log('Koneksi Error : ' + error);
    }
})();

const db = client.db('eduwork');

module.exports = db;