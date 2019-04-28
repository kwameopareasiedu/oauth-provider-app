const APIRouter = require("express").Router();

APIRouter.use("/external", require("./external"));
APIRouter.use("/main", require("./main"));

module.exports = APIRouter;
