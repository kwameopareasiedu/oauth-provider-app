const bcrypt = require("bcryptjs");
const { dbService } = _services;

module.exports = async (req, res) => {
	try {
		const { email, password, oauthRequestTokenKey } = req.body;
		const user = await dbService.user.findByEmail(email);

		if (!user) return res.status(500).send("No user found or invalid password");
		if (!bcrypt.compareSync(password, user.password)) return res.status(500).send("No user found or invalid password");

		let verifiedOAuthKey = null;
		if (oauthRequestTokenKey) {
			const requestToken = await dbService.requestToken.findByKey(oauthRequestTokenKey);

			if (requestToken.status == "pending") {
				// To prevent possible token reuse forgery, only accept tokens that have not been verified
				await dbService.requestToken.setStatusToVerified(requestToken.id, user.id);
				verifiedOAuthKey = oauthRequestTokenKey;
			}
		}

		req.session.userId = user.id;
		return res.json({ verifiedOAuthKey });
	} catch (err) {
		console.error(__filename, err);
		return res.status(500).send("An error occurred");
	}
};
