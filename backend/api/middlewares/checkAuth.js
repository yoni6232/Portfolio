 jwt = require('jsonwebtoken');
 checkAuth = (req,res,next)=>{

    try{

        const token = req.headers.authorization.split(' ')[1]; //take the token in the next place in the string 
        jwt.verify(token ,  'shhhhh',null,null );
        console.log(token)
        next();

    } catch(error){
        res.status(401).json({
            message : ' Auth faild'
        })
    }


}

module.exports = checkAuth;