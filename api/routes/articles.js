const express = require('express');
const router = express.Router();

const {
    getAllArticles,
    createArticles,
    updateArticle,
    deleteArticle
} = require('../controllers/articles');

router.get('/',getAllArticles);
router.post('/', createArticles);
router.patch('/:articleId',updateArticle)
router.delete('/:articleId',deleteArticle) 


module.exports = router;