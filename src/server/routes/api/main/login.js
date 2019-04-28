const bcrypt = require("bcryptjs");
const { dbService } = _services;

module.exports = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await dbService.user.findByEmail(email);

		if (!user) return res.status(500).send("No user found or invalid password");
		if (!bcrypt.compareSync(password, user.password)) return res.status(500).send("No user found or invalid password");

		req.session.userId = user.id;
		return res.send("Authenticated");
	} catch (err) {
		console.error(__filename, err);
		return res.status(500).send("An error occurred");
	}
};
