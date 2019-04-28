exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("users")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("users").insert([
				{
					id: 1,
					name: "Kwame Opare Asiedu",
					email: "test@gmail.com",
					password: "$2a$10$Efm52.AMmGZRAfm2sJpitOsnowVFfQl03vGq8xSA.RI0j9H2uFn7m"
				}
			]);
		});
};
