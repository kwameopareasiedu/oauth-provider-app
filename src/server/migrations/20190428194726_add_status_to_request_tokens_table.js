exports.up = function(knex) {
	return knex.schema.alterTable("request_tokens", table => {
		table
			.string("status")
			.notNullable()
			.defaultTo("pending");
		table
			.boolean("used")
			.notNullable()
			.defaultTo(false);
	});
};

exports.down = function(knex) {
	return knex.schema.alterTable("request_tokens", table => {
		table.dropColumns(["status", "used"]);
	});
};
