const { Pool } = require('pg');
const { getAuth } = require('./authContoller');

const pool = new Pool({
    host: '127.0.0.1',
    user: 'postgres',
    password: '12345',
    database: '3piTest',
    port: '5432'
});

const getUser = async (req, res) => {
    const authorization = await getAuth(req.headers.auth);
    if (authorization === "admin") {
        const response = await pool.query('SELECT * FROM users');
        console.log(response.rows);
        res.send(response.rows);
    }else if (authorization !== "admin"){
        res.status(401).json("bloqued");
    }
    
};

const getUserById = async (req, res) => {
    const id = req.params.id;

    const authorization = await getAuth(req.headers.auth);
    if (authorization === "admin") {
        const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        res.json(response.rows);
    }else if (authorization !== "admin"){
        res.status(401).json("bloqued");
    }
    

    
};

const createUser = async (req, res) => {
    const {name, lastName, document, id, roleId} = req.body;

    const authorization = await getAuth(req.headers.auth);
    if (authorization === "admin") {

        const response = await pool.query('INSERT INTO users (name, last_name, document, id, role_id) VALUES ($1, $2, $3, $4, $5)', [name, lastName, document, id, roleId]);
        console.log(response);
        res.send("user created");
        
    }else if (authorization !== "admin"){
        res.status(401).json("bloqued");
    }
    
    
    
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const { name, lastName, document, roleId } = req.body;

    const authorization = await getAuth(req.headers.auth);
    if (authorization === "admin") {
        const response = await pool.query('UPDATE users SET name=$1, last_name=$2, document=$3, roleId=$5  WHERE id = $4', [
            name,
            lastName,
            document,
            id,
            roleId
        ]);
        res.json('User Updated Successfully');
    }else if (authorization !== "admin"){
        res.status(401).json("bloqued");
    }
    

    
};

const deleteUser = async (req, res) => {
    const id = req.params.id;

    const authorization = await getAuth(req.headers.auth);
    if (authorization === "admin") {
        await pool.query('DELETE FROM users where id = $1', [id]);
        res.json(`User ${id} deleted Successfully`);
    }else if (authorization !== "admin"){
        res.status(401).json("bloqued");
    }
    

   
};

module.exports = {
    getUser,
    getUserById,
    createUser, 
    updateUser,
    deleteUser
}