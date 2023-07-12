const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const getAllUsers = async (req, res, next) => {
  const users = await User.findAll();
  res.render('directory', { title: "Directory of Pokemon", users})
};

const createUser = async (req, res) => {
  res.render('create', { title: 'Create a User' });
}

const postCreateUser = async (req, res) => {
  // get user details from req.body
  console.log(req.body);
  const { firstName, lastName, email, username, password } = req.body;
  console.log(username, password, firstName, lastName, email);

  // Create a new hard coded user
  const newUser = await User.create({
    username,
    password,
    firstName,
    lastName,
    email,
  });
  console.log("New user's auto-generated ID:", newUser.id);
  res.send('User created');
};

const getUserByID = (req, res) => {
  const { firstName, lastName, email, image, id } = req.user;
  console.log(firstName, lastName, email, image, id);

  res.render('profile', {
    title: 'User Profile',
    firstName,
    lastName,
    email,
    image,
    id,
  });
  if(req.user = true){
	console.log('Success!')
  } else {
	console.log(err)
  }
};

const editUserByID = async (req, res, next) => {
  const id = req.params.id;
  const { firstName, lastName, email } = await User.findByPk(id);
  console.log(firstName, lastName, email, id);
  res.render('edit', { title: 'Edit User', id, firstName, lastName, email });
}

const postEditUserByID = async (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, email } = req.body;
  await User.update({ firstName, lastName, email }, { where: { id: id } });
  res.redirect(`/users/profile/${id}`);
};

const getLogin = async (req, res) => {
  res.render('login', { title: 'Login to our App' });
};

const postLogin = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: { username },
  });

  if (user == null) {
    res.render('login', { title: 'Login', error: 'User not found' });
  } else {
    const hashedPW = user.password;
    await bcrypt.compare(password, hashedPW, function (err, result) {
      console.log(result);

      if (result) {
		//this saves it as a cookie so i can create a session??
        const token = jwt.sign({ foo: 'bar' }, 'superSecretPrivateKey', {expiresIn: '1h'});
        console.log(token);

        res.cookie("token", token);
        res.redirect('/');
      } else res.render('login', { title: 'Login', error: 'Passwords do not match' });
    });
  }
};


//EXPORTS
module.exports = {
  getAllUsers,
  createUser,
  postCreateUser,
  getUserByID,
  editUserByID,
  postEditUserByID, 
  getLogin, 
  postLogin
}