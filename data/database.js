const config = require("../config/config");
const Sequelize = require("sequelize");

const { database, host, port, user, password } = config;

const sequelize = new Sequelize(database, user, password, {
	dialect: "mysql",
	host: host,
	port: port,
	define: {
		freezeTableName: true,
	},
});

module.exports = sequelize;
