module.exports = {
    
    getAllArticles : (req,res)=>{
        res.status(200).json({
            message : 'Get all Articles'
        }) 
    },
    createArticles : (req,res)=>{
        res.status(200).json({
            message : 'Create a new articles'
        }) 
    },
    updateArticle :  (req,res)=>{
        const articleId= req.params.articleId
        res.status(200).json({
            message : `Update acticle - ${articleId}`
        }) 
    },
    deleteArticle :  (req,res)=>{
        const articleId= req.params.articleId
        res.status(200).json({
            message : `Delete acticle - ${articleId}`
        })
    }

};