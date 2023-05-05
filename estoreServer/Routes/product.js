const express = require('express');
const product = express();


product.get("getCategories", (req, res) => {
    let appData = {
        isError: false,
        data: []
    };
    res.status(204).json(appData);
})

module.exports = product;
