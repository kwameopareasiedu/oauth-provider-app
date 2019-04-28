// Objection is fully configured here and ready to go!

const PG_DECIMAL_OID = 1700;
require("pg").types.setTypeParser(PG_DECIMAL_OID, parseFloat);

const knexfile = require("../../../knexfile.js");
const knexConfig = knexfile[process.env.NODE_ENV];

const knex = require("knex")(knexConfig);
const { Model } = require("objection");

Model.knex(knex);

module.exports = Model;
