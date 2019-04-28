const { generate } = require("randomstring");
const { dbService } = _services;

module.exports = async (req, res) => {
	try {
		const { oauthRequestTokenKey } = req.body;
		const requestToken = await dbService.requestToken.findByKey(oauthRequestTokenKey);

		if (requestToken.status == "pending" || requestToken.used || !requestToken.user_id) return res.status(500).send("Invalid request token");

		const key = generate({ length: 16 });
		const secret = generate({ length: 128 });
		await dbService.authToken.create({ key, secret, user_id: requestToken.user_id });

		return res.json({ key, secret });
	} catch (err) {
		console.error(__filename, err);
		return res.status(500).send("An error occurred");
	}
};
