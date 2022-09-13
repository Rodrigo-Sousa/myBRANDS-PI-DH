const express = require("express");
const myrouter = express.Router();
const adminController = require('../controllers/AdminController');

router.get('/', adminController.index);
router.get('/:id', adminController.show);
router.post('/:id', adminController.store);
router.patch('/:id', adminController.update);
router.delete('/:id', adminController.destroy);

module.exports = myrouter;