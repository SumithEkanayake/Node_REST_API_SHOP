const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const OrdersController = require('../controllers/oders');

//Get request
router.get('/',checkAuth, OrdersController.orders_get_all);
//Post request
router.post('/', checkAuth, OrdersController.orders_create_order);
//Get Single
router.get('/:orderId',checkAuth, OrdersController.orders_get_order );
//Delete order
router.delete('/:orderId',checkAuth, OrdersController.orders_delete_order);

module.exports = router;