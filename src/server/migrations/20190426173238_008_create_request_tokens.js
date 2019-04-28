//eslint-disable-next-line no-unused-vars
exports.up = function(knex, Promise) {
	return knex.schema.createTable("request_tokens", table => {
		table.increments();
		table
			.string("key")
			.unique()
			.notNullable();
		table
			.string("secret")
			.unique()
			.notNullable();
		table.timestamps(true, true);
	});
};

//eslint-disable-next-line no-unused-vars
exports.down = function(knex, Promise) {
	return knex.schema.dropTable("request_tokens");
};
