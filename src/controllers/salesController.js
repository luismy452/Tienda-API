const { Pool } = require('pg');
const { getAuth } = require('./authContoller');

const pool = new Pool({
    host: '127.0.0.1',
    user: 'postgres',
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
    const {id, productId, userId, qty} = req.body;
    const authorization = await getAuth(req.headers.auth);
        console.log("auth: " + authorization);
    
    const response = await pool.query('INSERT INTO sales (id, products_id, qty, users_id) VALUES ($1, $2, $3, $4)', [id, productId, parseInt(qty), userId]);
    console.log(response);
    res.send("Sales created");
};

const updateSales = async (req, res) => {
    const id = req.params.id;
    const { productId, userId, qty } = req.body;

    const authorization = await getAuth(req.headers.auth);
        console.log("auth: " + authorization);
    if (authorization === "admin") {
        const response = await pool.query('UPDATE sales SET products_id=$1, users_id=$2, qty=$3,  WHERE id = $4', [
            productId, userId, parseInt(qty), id
        ]);
        res.json('Sales Updated Successfully');
    }else if (authorization !== "admin"){
        res.status(401).json("bloqued");
    }

    
};

const deleteSales = async (req, res) => {
    const id = req.params.id;

    if (authorization === "admin") {
    const authorization = await getAuth(req.headers.auth);
    await pool.query('DELETE FROM sales where id = $1', [id]);
    res.json(`Sales ${id} deleted Successfully`);
    }else if (authorization !== "admin"){
    res.status(401).json("bloqued");
    }
};

module.exports = {
    getSales,
    getSalesById,
    createSales, 
    updateSales,
    deleteSales
}