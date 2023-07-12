const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
	"fzpcjouk",
	"fzpcjouk",
	"mP0OkadJpPBNuGVNM_O5dMUWJrzKYL40",
	{
		host: "ottodb",
		dialect: "postgres",
	}
);

module.exports = sequelize;
