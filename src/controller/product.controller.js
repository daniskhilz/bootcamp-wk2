const { products } = require("../data/products");

// To get all products
const getAllProducts = (req, res) => {
  const { manufacturer, size } = req.query;

  let result = products;

  if (manufacturer) {
    result = result.filter((product) => {
      return product.manufacturer.toLowerCase() === manufacturer.toLowerCase();
    });
  }

  if (size) {
    result = result.filter((product) => {
      return product.size.toLowerCase() === size.toLowerCase();
    });
  }

  res.status(200).json({
    success: true,
    data: result,
    length: result.length,
  });
};

// To get using a parameter

const getOneProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((prod) => prod.id === productId);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json({
    success: true,
    data: product,
  });
};

module.exports = { getAllProducts, getOneProduct };
