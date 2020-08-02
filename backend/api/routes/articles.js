const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload')
const checkAuth = require('../middlewares/checkAuth')

const {
    getAllArticles,
    createArticle,
    updateArticle,
    deleteArticle,
    getArticle
} = require('../controllers/articles');
const { checkout } = require('./categories');

router.get('/',getAllArticles);
router.get('/:articleId',getArticle);


router.post('/',checkAuth ,upload.single('image'), createArticle);
router.patch('/:articleId',checkAuth,updateArticle)
router.delete('/:articleId',checkAuth,deleteArticle) 


module.exports = router;