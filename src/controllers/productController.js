const { Pool } = require('pg');

const pool = new Pool({
    host: '127.0.0.1',
    Product: 'postgres',
    password: '12345',
    database: '3piTest',
    port: '5432'
});

const getProduct = async (req, res) => {
    const response = await pool.query('SELECT * FROM products');
    console.log(response.rows);
    res.send(response.rows);
};

const getProductById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
    res.json(response.rows);
};

const createProduct = async (req, res) => {
    const {name,description, id, price} = req.body;
    
    const response = await pool.query('INSERT INTO products (name, description, price, id) VALUES ($1, $2, $3, $4)', [name, description, price, id]);
    console.log(response);
    res.send("Product created");
};

const updateProduct = async (req, res) => {
    const id = req.params.id;
    const { name, description, price} = req.body;

    const response = await pool.query('UPDATE products SET name=$1, description=$2, price=$3  WHERE id = $4', [
        name,
        description,
        price,
        id,
        
    ]);
    res.json('Product Updated Successfully');
};

const deleteProduct = async (req, res) => {
    const id = req.params.id;
    await pool.query('DELETE FROM products where id = $1', [id]);
    res.json(`Product ${id} deleted Successfully`);
};

module.exports = {
    getProduct,
    getProductById,
    createProduct, 
    updateProduct,
    deleteProduct
}