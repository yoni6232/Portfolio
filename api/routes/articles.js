const express = require('express');
const router = express.Router();

const {
    getAllArticles,
    createArticle,
    updateArticle,
    deleteArticle,
    getArticle
} = require('../controllers/articles');

router.get('/',getAllArticles);
router.get('/:articleId',getArticle);
router.post('/', createArticle);
router.patch('/:articleId',updateArticle)
router.delete('/:articleId',deleteArticle) 


module.exports = router;