module.exports = {
    
    getAllcategories : (req,res)=>{
        res.status(200).json({
            message : 'Get all categories'
        }) 
    },
    createcategories : (req,res)=>{
        res.status(200).json({
            message : 'Create a new categories'
        }) 
    },
    updatecategories :  (req,res)=>{
        const categoryId= req.params.categoryId
        res.status(200).json({
            message : `Update categories - ${categoryId}`
        }) 
    },
    deletecategories :  (req,res)=>{
        const categoryId= req.params.categoryId
        res.status(200).json({
            message : `Delete categories - ${categoryId}`
        })
    }

}