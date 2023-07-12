var express = require('express');
var router = express.Router();
const { User } = require('../models');
const userController = require('../controllers/users');
const findUser = require('../middleware/findUser');
const bcrypt = require('bcrypt');
const authCheck = require('../middleware/authCheck');
const saltRounds = 10;

// GET USERS
router.get('/', authCheck, userController.getAllUsers);

// GET CREATE USER
router.get('/create', userController.createUser);

// POST CREATE USER
router.post('/create', userController.postCreateUser);

// GET USER by ID
router.get('/profile/:id', findUser, userController.getUserByID);

// GET EDIT user (load a template to edit a user)
router.get('/edit/:id', userController.editUserByID);

// PUT or PATCH edit a user
router.post('/edit/:id', userController.postEditUserByID);

// DELETE USER BY ID
router.get("/delete/:id", async (req, res) => {
	const id = req.params.id;
	const { firstName, lastName, email } = req.body;
	await User.destroy({ where: { id: id } });
	res.send("user had been deleted");
});

// GET LOGIN
router.get('/login', userController.getLogin );

// POST LOGIN
router.post('/login', userController.postLogin );

module.exports = router;