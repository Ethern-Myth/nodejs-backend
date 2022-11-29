class UserInterface {
	AddUser(form, allUsers) {
		return { form, allUsers };
	}
	CurrentUser(id) {
		return id;
	}
}

module.exports = UserInterface;
