const { dbService } = _services;

module.exports = async function isLoggedIn(req, res, next) {
	try {
		const { userId } = req.session;
		if (!userId) return res.status(401).send("You must be logged in");

		const user = await dbService.user.findById(userId);
		if (!user) return res.status(401).send("You must be logged in");
		req.user = user;

		return next();
	} catch (err) {
		console.error(__filename, err);
		return res.status(500).send("An error occurred");
	}
};
