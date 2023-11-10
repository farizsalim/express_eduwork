const {MongoClient} = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const pass= process.env.MONGOPASS
const url = `mongodb+srv://adaw2216:${pass}@cluster0.q96ymty.mongodb.net/`
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