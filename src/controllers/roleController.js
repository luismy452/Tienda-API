const { Pool } = require('pg');

const pool = new Pool({
    host: '127.0.0.1',
    Role: 'postgres',
    password: '12345',
    database: '3piTest',
    port: '5432'
});

const getRole = async (req, res) => {
    const response = await pool.query('SELECT * FROM roles');
    console.log(response.rows);
    res.send(response.rows);
};

const getRoleById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM roles WHERE id = $1', [id]);
    res.json(response.rows);
};

const createRole = async (req, res) => {
    const {name,id} = req.body;
    
    const response = await pool.query('INSERT INTO roles (name, id) VALUES ($1, $2)', [name, lastName, document, id]);
    console.log(response);
    res.send("Role created");
};

const updateRole = async (req, res) => {
    const id = req.params.id;
    const { name, lastName, document } = req.body;

    const response = await pool.query('UPDATE roles SET name=$1 WHERE id = $2', [
        name,
        id,
    ]);
    res.json('Role Updated Successfully');
};



module.exports = {
    getRole,
    getRoleById,
    createRole, 
    updateRole,
}