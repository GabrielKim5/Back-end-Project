
const { User } = require('../models')

const findUser = async (req, res, next) => {
	console.log("Find single user by Pk in database");
    const id = req.params.id;
	req.user = await User.findByPk(id);
	console.log(req.user);
	next();
};

module.exports = findUser;
