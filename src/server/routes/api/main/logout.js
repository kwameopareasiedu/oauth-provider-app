module.exports = async (req, res) => {
	try {
		delete req.session.userId;
		req.session.save();

		return res.send("Logged out");
	} catch (err) {
		console.error(__filename, err);
		return res.status(500).send("An error occurred");
	}
};
