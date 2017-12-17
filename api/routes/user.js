const express = require('express');

const fromUserController = require('./../controllers/user');

const router = express.Router();


router.get('/list', fromUserController.getUsersList);

router.post('/signup', fromUserController.userSignUp);

router.post('/signin', fromUserController.userSignIn);

router.delete('/:userId', fromUserController.userDelete);


module.exports = router;
