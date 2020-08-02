const express = require('express');
const router = express.Router();

const {
    login,
    profile,
    register,
} = require('../controllers/users');


router.post('/login', login);
router.post('/register', register);
router.get('/profile',profile)
module.exports = router;