//eslint-disable-next-line no-unused-vars
exports.up = function(knex, Promise) {
	return knex.schema.createTable("users", table => {
		table.increments();
		table.string("name").notNullable();
		table
			.string("email")
			.unique()
			.notNullable();
		table.string("password").notNullable();
		table.timestamps(true, true);
	});
};

//eslint-disable-next-line no-unused-vars
exports.down = function(knex, Promise) {
	return knex.schema.dropTable("users");
};
