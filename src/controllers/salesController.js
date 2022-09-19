const { Pool } = require('pg');

const pool = new Pool({
    host: '127.0.0.1',
    Sales: 'postgres',
    password: '12345',
    database: '3piTest',
    port: '5432'
});

const getSales = async (req, res) => {
    const response = await pool.query('SELECT * FROM sales');
    console.log(response.rows);
    res.send(response.rows);
};

const getSalesById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM sales WHERE id = $1', [id]);
    res.json(response.rows);
};

const createSales = async (req, res) => {
    const {id, productsId, usersId, qty} = req.body;
    
    const response = await pool.query('INSERT INTO sales (id, products_id, qty, users_id) VALUES ($1, $2, $3, $4)', [id, productsId, qty, usersId]);
    console.log(response);
    res.send("Sales created");
};

const updateSales = async (req, res) => {
    const id = req.params.id;
    const { productsId, usersId, qty } = req.body;

    const response = await pool.query('UPDATE sales SET products_id=$1, users_id=$2, qty=$3,  WHERE id = $4', [
        productsId, usersId, qty, id
    ]);
    res.json('Sales Updated Successfully');
};

const deleteSales = async (req, res) => {
    const id = req.params.id;
    await pool.query('DELETE FROM sales where id = $1', [id]);
    res.json(`Sales ${id} deleted Successfully`);
};

module.exports = {
    getSales,
    getSalesById,
    createSales, 
    updateSales,
    deleteSales
}