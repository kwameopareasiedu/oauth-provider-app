//eslint-disable-next-line no-unused-vars
exports.up = function(knex, Promise) {
	return knex.schema.createTable("auth_tokens", table => {
		table.increments();
		table
			.string("key")
			.unique()
			.notNullable();
		table
			.string("secret")
			.unique()
			.notNullable();
		table
			.integer("user_id")
			.references("users.id")
			.index();
		table.timestamps(true, true);
	});
};

//eslint-disable-next-line no-unused-vars
exports.down = function(knex, Promise) {
	return knex.schema.dropTable("auth_tokens");
};
