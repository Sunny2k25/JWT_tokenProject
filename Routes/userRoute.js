var express = require('express')
const {handleUserSignUp,handleUserLogin, getdetails} =require('../Controllers/userController')
const verify = require('../Middleware/verifyMiddleware');
var router= express.Router();


router.post('/sign',handleUserSignUp)
router.post('/login',handleUserLogin)
router.get('/getdetails',verify,getdetails)

module.exports=router;