const sequelize = require("../data/database");
const User = require("../models/user");
const UserService = require("../services/userService");

class UserController {
	constructor() {}

	async GetAllUsers() {
		const results = await sequelize
			.sync()
			.then(() => {
				return User.findAll();
			})
			.catch((err) => console.log(err));
		return results;
	}

	async GetUser(id) {
		const results = await sequelize
			.sync()
			.then(() => {
				return User.findOne({
					where: new UserService().CurrentUser(id),
				});
			})
			.catch((err) => console.log(err));
		return results;
	}

	async CreateUser(id, form) {
		const allUsers = await this.GetAllUsers();
		const results = await sequelize
			.sync()
			.then(() => {
				const myForm = new UserService().AddUser(form, allUsers);
				if (myForm === true) {
					return "User Already Exists";
				}
				if (id > 0) {
					return User.update(myForm, { where: { id: id } });
				}
				return User.create(myForm);
			})
			.catch((err) => console.log(err));
		return results;
	}

	async DeleteUser(id) {
		await sequelize
			.sync()
			.then(() => {
				User.destroy({ where: { id: id } });
			})
			.catch((err) => console.log(err));
	}
}

module.exports = { UserController };
