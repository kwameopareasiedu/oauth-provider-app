const MainRouter = require("express").Router();
const { isLoggedIn } = require("./policies");

MainRouter.post("/login", require("./login"));

MainRouter.use(isLoggedIn);

MainRouter.get("/logout", require("./logout"));
MainRouter.use("/post", require("./post"));

module.exports = MainRouter;
