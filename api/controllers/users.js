module.exports = {
    
    signup : (req,res)=>{
        res.status(200).json({
            message : 'Sign up'
        }) 
    },
    login : (req,res)=>{
        res.status(200).json({
            message : 'Login'
        }) 
    },

}