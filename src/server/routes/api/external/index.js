const ExternalRouter = require("express").Router();

ExternalRouter.get("/generate-request-token", require("./generate-request-token"));
ExternalRouter.post("/exchange-request-token-for-access-token", require("./exchange-request-token-for-access-token"));
ExternalRouter.post("/fetch-posts", require("./fetch-posts"));

module.exports = ExternalRouter;
