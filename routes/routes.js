const express = require("express");
const router = express.Router();
const { UserController } = require("../controllers/userController");

const user = new UserController();

//Home Page
router.get("/", (req, res) => {
	res.send("User Api");
});

//All Users
router.get("/all", async (req, res) => {
	try {
		const data = await user.GetAllUsers();
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

//Single User
router.get("/user/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const data = await user.GetUser(id);
		res.json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

//Create User
router.post("/add/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const form = req.body;
		const data = await user.CreateUser(id, form);
		res.status(201).json(data);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

//Delete User
router.delete("/remove/:id", async (req, res) => {
	try {
		const id = req.params.id;
		await user.DeleteUser(id);
		res.status(204).json({ message: "User is removed" });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

module.exports = router;
