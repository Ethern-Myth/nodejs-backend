const sequelize = require("../data/database");
const Message = require("../models/message");
const AddMessage = require("../interfaces/msgInterface");

function CreateMessage() {
	sequelize
		.sync()
		.then(() => {
			return Message.create(AddMessage("Hi There", 1));
		})
		.then((msg) => console.log("Message Created:", msg.dataValues))
		.catch((err) => console.log(err));
}

module.exports = CreateMessage;
