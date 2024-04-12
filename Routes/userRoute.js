var express = require('express')
const {handleUserSignUp,handleUserLogin} =require('../Controllers/userController')
var router= express.Router();


router.post('/sign',handleUserSignUp)
router.post('/login',handleUserLogin)

module.exports=router;