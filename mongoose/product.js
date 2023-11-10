const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'field name harus ada'],
        minlength: 3,
        maxlength: 50
    },
    price: {
        type: Number,
        required: true,
        min: 1000,
        max:100000000
    },
    stock: Number,
    status:{
        type: Boolean,
        default: true
    }
})

const product = mongoose.model('productions', productSchema);
module.exports = product