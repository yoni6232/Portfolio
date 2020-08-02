const express = require('express');
const router = express.Router();

const {getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory
} = require('../controllers/categories');

router.get('/',getAllCategories);
router.post('/', createCategory);
router.patch('/:categoryId',updateCategory)
router.delete('/:categoryId',deleteCategory) 
router.get('/:categoryId',getCategory);


module.exports = router;