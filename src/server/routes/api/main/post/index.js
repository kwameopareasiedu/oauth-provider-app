const PostRouter = require("express").Router();

PostRouter.get("/fetch-all", require("./fetch-all"));
PostRouter.get("/fetch/:id", require("./fetch-one"));

module.exports = PostRouter;
