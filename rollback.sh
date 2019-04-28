# Unix batch file to set the DATABASE_URL environment variable and reverse the last migration file
export DATABASE_URL=postgres://postgres:postgre@127.0.0.1:5432/oauth_provider_dev
knex migrate:rollback