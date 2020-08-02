const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const user = require('../models/user');

module.exports = {
    login: (req, res) => {
        const { email, password } = req.body;
        
        User.find({ email }).then((users) => {
            if (users.length === 0) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            }

            const [ user ] = users;
            
            bcrypt.compare(password, user.password, (error, result) => {
                if (error) {
                    return res.status(401).json({
                        message: 'Auth failed'
                    });
                }

                if (result) {
                    const token = jwt.sign({
                        id: user._id,
                        first_name : user.first_name,
                        last_name : user.last_name,
                        email: user.email,
                    },
                    'shhhhh',
                    {
                        expiresIn: "1H"
                    });
                    
                    return res.status(200).json({
                        message: 'Auth successful',
                        token
                    })
                }

                res.status(401).json({
                    message: 'Auth failed'
                });
            })
        })
    },


register : (req,res) => {
    const today = new Date()
    const userDate = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        password : req.body.password,
        created : today
    }
    user.findOne({
        email : req.body.email
    }).then(user =>{
        if(!user){
            bcrypt.hash(req.body.password,10,(err,hash) =>{
                userDate.password = hash
                User.create(userDate)
                .then(user => {
                    res.json({
                        status : user.email + ' registered'
                    })
                    .catch(err =>{
                        res.send('error'+err)
                    })
                })
            })

        }
        else{
            res.json({error:'user exists'})
        }
    })
    .catch(err=>{
        res.send('error' + err)
    })

},
profile:(req,res)=>{
    var decoded = jwt.verify(req.headers['authorzation'],)

}

}