const { Router } = require('express');
const router = Router();

const { getUser, getUserById, createUser, updateUser, deleteUser} = require('../controllers/userController');
const { getRole,getRoleById,createRole, updateRole} = require('../controllers/roleController');
const { getSales, getSalesById, createSales, updateSales, deleteSales} = require('../controllers/salesController');
const { getProduct, getProductById, createProduct, updateProduct, deleteProduct} = require('../controllers/productController');

//ususarios
router.get('/users', getUser);
router.get('/users/:id',getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

//roles
router.get('/roles', getRole);
router.get('/roles/:id',getRoleById);
router.post('/roles', createRole);
router.put('/roles/:id', updateRole);

//ventas
router.get('/sales', getSales);
router.get('/users/:id',getSalesById);
router.post('/users', createSales);
router.put('/users/:id', updateSales);
router.delete('/users/:id', deleteSales);

//productos
router.get('/Products', getProduct);
router.get('/Products/:id',getProductById);
router.post('/Products', createProduct);
router.put('/Products/:id', updateProduct);
router.delete('/Products/:id', deleteProduct);







module.exports = router;