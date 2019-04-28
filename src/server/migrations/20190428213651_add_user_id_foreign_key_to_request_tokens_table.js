exports.up = function(knex) {
	return knex.schema.alterTable("request_tokens", table => {
		table
			.integer("user_id")
			.references("users.id")
			.index();
	});
};

exports.down = function(knex) {
	return knex.schema.alterTable("request_tokens", table => {
		table.dropForeign(["user_id"]);
		table.dropColumn("user_id");
	});
};
