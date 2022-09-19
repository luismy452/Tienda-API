const { Pool } = require('pg');

const pool = new Pool({
    host: '127.0.0.1',
    user: 'postgres',
    password: '12345',
    database: '3piTest',
    port: '5432'
});

const getAuth = async (auth) => {
    let authorization;
    console.log("auth en authcontroller: " +  auth);
    const response = await pool.query('SELECT * FROM roles WHERE id = (SELECT role_id FROM users WHERE id = $1)', [auth]);
    console.log("response", response.rows);
    switch (response.rows[0].name) {
        case "admin":
            authorization = "admin";
            break;

        case "employee":
            authorization = "employee";
            break;
    
        default:
            authorization = "none"
            break;
    };

    console.log("authController: "+ authorization);

    return authorization;
};

module.exports = {
    getAuth
}