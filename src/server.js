const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 80;

let products = [];

app.use(cors());
app.use(bodyParser.json());

app.get('/products', (req, res) => {
    res.json(products);
});

app.post('/products', (req, res) => {
    products.push(req.body);
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
