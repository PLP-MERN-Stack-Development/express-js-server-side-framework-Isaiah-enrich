const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

let products = []; // In-memory storage

// GET all products
router.get('/', (req, res) => {
    res.json(products);
});

// GET product by ID
router.get('/:id', (req, res, next) => {
    const product = products.find(p => p.id === req.params.id);
    if (!product) return next({ status: 404, message: 'Product not found' });
    res.json(product);
});

// POST create product
router.post('/', (req, res, next) => {
    const { name, description, price, category, inStock } = req.body;
    const newProduct = { id: uuidv4(), name, description, price, category, inStock };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// PUT update product
router.put('/:id', (req, res, next) => {
    const product = products.find(p => p.id === req.params.id);
    if (!product) return next({ status: 404, message: 'Product not found' });

    const { name, description, price, category, inStock } = req.body;
    Object.assign(product, { name, description, price, category, inStock });
    res.json(product);
});

// DELETE product
router.delete('/:id', (req, res, next) => {
    const index = products.findIndex(p => p.id === req.params.id);
    if (index === -1) return next({ status: 404, message: 'Product not found' });

    products.splice(index, 1);
    res.status(204).send();
});

module.exports = router;
