# Unix shell file to set the DATABASE_URL environment variable and run the migration files
export DATABASE_URL=postgres://postgres:postgre@127.0.0.1:5432/oauth_provider_dev
knex migrate:latest