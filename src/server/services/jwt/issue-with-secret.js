const jwt = require("jsonwebtoken");

module.exports = (payload, expiry, secret) => {
    return new Promise((resolve, reject) => {
        if (typeof payload == "undefined" || typeof expiry == "undefined") return reject({ message: "payload or expiry not specified" });

        const token = jwt.sign(payload, secret, { expiresIn: expiry });
        return resolve(token);
    });
};
