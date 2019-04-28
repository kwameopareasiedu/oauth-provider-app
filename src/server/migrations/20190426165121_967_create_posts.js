//eslint-disable-next-line no-unused-vars
exports.up = function(knex, Promise) {
	return knex.schema.createTable("posts", table => {
		table.increments();
		table
			.string("title")
			.unique()
			.notNullable();
		table.text("content").notNullable();
		table
			.integer("user_id")
			.references("users.id")
			.index();
		table.timestamps(true, true);
	});
};

//eslint-disable-next-line no-unused-vars
exports.down = function(knex, Promise) {
	return knex.schema.dropTable("posts");
};
