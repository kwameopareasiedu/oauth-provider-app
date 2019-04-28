const { dbService } = _services;

module.exports = async (req, res) => {
	try {
		const posts = await dbService.post.findByUserId(req.user.id);
		return res.json(posts);
	} catch (err) {
		console.error(__filename, err);
		return res.status(500).send("An error occurred");
	}
};
