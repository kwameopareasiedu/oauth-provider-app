const { dbService } = _services;

module.exports = async (req, res) => {
	try {
		const post = await dbService.post.findById(req.params.id);
		return res.json(post);
	} catch (err) {
		console.error(__filename, err);
		return res.status(500).send("An error occurred");
	}
};
