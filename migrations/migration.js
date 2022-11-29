const sequelize = require("../data/database");
const User = require("../models/user");
const Message = require("../models/message");
const initialize = require("../utils/initialize");

User.hasMany(Message, { onDelete: "cascade" });

function CreateDB() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			initialize();
			resolve();
		}, 3000);
	});
}

//Run - Creates tables after a database is checked to exist
async function Run() {
	await CreateDB();
	sequelize
		// CREATE TABLES IF TABLE EXISTS --  sync force
		// .sync({ force: true })
		.sync()
		.then((result) => {
			console.log("Database connected..");
		})
		.catch((err) => console.log(err));
}

module.exports = Run;
