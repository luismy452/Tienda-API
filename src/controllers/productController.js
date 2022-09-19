const { Pool } = require('pg');
const { getAuth } = require('./authContoller')

const pool = new Pool({
    host: '127.0.0.1',
    user: 'postgres',
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

    
        const authorization = await getAuth(req.headers.auth);
        console.log("auth: " + authorization);

        if (authorization === "admin"){
            req.body.map( async elem => {
                await pool.query('INSERT INTO products (name, price, description, id) VALUES ($1, $2, $3, $4)', 
                [elem.name, parseInt(elem.price), elem.description, elem.id]);
            
        });
        res.status(201).send("Products has been created");
            
        }else if(authorization !== "admin"){
            res.status(401).send("User hasn't authorization to create product");
        }
        
   
};

const updateProduct = async (req, res) => {
    const id = req.params.id;
    const { name, description} = req.body;
    const price = parseInt(req.body.price);

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