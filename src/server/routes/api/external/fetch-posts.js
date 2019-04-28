const { dbService, jwtService } = _services;

module.exports = async (req, res) => {
	try {
		const { oauthAccessTokenKey, token } = req.body;
		const authToken = await dbService.authToken.findByKey(oauthAccessTokenKey);
		await jwtService.verifyWithSecret(token, authToken.secret);

		const posts = await dbService.post.findByUserId(authToken.user_id);
		return res.json(posts);
	} catch (err) {
		console.error(__filename, err);
		return res.status(500).send("An error occurred");
	}
};
