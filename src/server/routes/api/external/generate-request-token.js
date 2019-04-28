const { generate } = require("randomstring");
const { dbService } = _services;

/**
 * Ideally, the client application should have been registered
 * with this service-provider application before-hand.
 * That way, we can register request tokens, request secrets
 * and authorized callback urls
 */
module.exports = async (req, res) => {
	try {
		const key = generate({ length: 16 });
		const secret = generate({ length: 128 });
		await dbService.requestToken.create({ key, secret });

		return res.json({ key });
	} catch (err) {
		console.error(__filename, err);
		return res.status(500).send("An error occurred");
	}
};
