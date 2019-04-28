const faker = require("faker/locale/en");

exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("posts")
		.del()
		.then(function() {
			// Inserts seed entries
			const posts = [];

			for (var i = 1; i <= 5; i++) {
				posts.push({
					id: i,
					title: faker.company.catchPhrase(),
					content: faker.lorem.paragraphs(1),
					user_id: 1
				});
			}

			return knex("posts").insert(posts);
		});
};
