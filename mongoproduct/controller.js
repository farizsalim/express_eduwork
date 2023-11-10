const { ObjectId } = require('bson')
const db = require('../mongodb')

const index = (req,res) => {
    db.collection('products').find()
    .toArray()
    .then(result => res.send(result))
    .catch(error => res.send(error))
}

const view = (req,res) => {
    const {id} = req.params
    db.collection('products').findOneAndDelete({_id: new ObjectId(id)})
    .then(result => res.send(result))
    .catch(error => res.send(error))
}

const addProduct = (req, res) => {
    const { name, price, stock, status } = req.body;

    if (!name || !price || !stock || status === undefined) {
        return res.status(400).send("Data tidak lengkap");
    }

    const newProduct = {
        _id: new ObjectId(),
        name,
        price,
        stock,
        status
    };

    db.collection('products').insertOne(newProduct)
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error));
};

const deleteProduct = (req, res) => {
    const { id } = req.params;

    db.collection('products').findOneAndDelete({ _id: new ObjectId(id) })
        .then(result => res.send(result))
        .catch(error => res.status(500).send(error));
};

module.exports = {
    index,
    view,
    addProduct,
    deleteProduct
}