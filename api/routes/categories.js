const express = require('express');
const router = express.Router();

const {getAllcategories,
    createcategories,
    updatecategories,
    deletecategories
} = require('../controllers/categories');

router.get('/',getAllcategories);
router.post('/', createcategories);
router.patch('/:categoryId',updatecategories)
router.delete('/:categoryId',deletecategories) 


module.exports = router;