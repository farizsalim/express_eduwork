const Product = require('./product');

const productcontroller = {
  index: async (req, res) => {
    try {
      const product = await Product.find();
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  view: async (req, res) => {
    const productId = req.params.id;

    try {
      const product = await Product.findById(productId);

      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  addProduct: async (req, res) => {
    const { name, price, stock, status } = req.body;

    try {
      const newProduct = new Product({
        name,
        price,
        stock,
        status,
      });

      await newProduct.save();

      res.json(newProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteProduct: async (req, res) => {
    const productId = req.params.id;

    try {
      const deletedProduct = await Product.findByIdAndDelete(productId);

      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }

      res.json(deletedProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = productcontroller;
