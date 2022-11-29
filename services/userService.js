const UserInterface = require("../interfaces/userInterface");

class UserService extends UserInterface {
	AddUser(form, allUsers) {
		const { name, surname, email } = form;
		const results = allUsers.filter(
			(user) =>
				user.name === name && user.surname === surname && user.email === email
		);
		if (results.length > 0) {
			return true;
		}
		return {
			name: name,
			surname: surname,
			email: email,
		};
	}

	CurrentUser(id) {
		return {
			id: id,
		};
	}
}

module.exports = UserService;
