# oauth-provider-app
A simple resource provider application to test OAuth2.0 implementation

Thus is a simple server that stores user posts. This project is half of a bigger one developed from scratch that helped me learn the OAuth2.0 protocol. The other half can be found at [oauth-consumer-app](https://github.com/kwameopareasiedu/oauth-consumer-app). The structure of this project conforms to the IETF specs on the protocol. You can read more on OAuth2.0 using this [link](https://tools.ietf.org/html/rfc6749).

## Setting up
To setup this project on your local machine:
- Clone this repo
- Run `npm install`
- Create a `nodemon.json` file at the root of the project and populate it with the code below:
```
{
	"restartable": "rs",
	"ignore": ["/.git", "/node_modules/*", "/src/client/*", "/dist/*"],
	"env": {
		"NODE_ENV": "development",
		"PORT": "17000",
		"MONGODB_URI": "mongodb://127.0.0.1:27017/MONGO_DB_NAME",
		"DATABASE_URL": "postgres://POSTGRESQL_USER:POSTGRESQL_PASS@127.0.0.1:POSTGRE_SQL_PORT/POSTGRESQL_DB_NAME",
		"SESSION_SECRET": "provider-app-session",
		"JWT_SECRET": "provider-app-jwt"
	}
}
```
- Replace **MONGO_DB_NAME**, **POSTGRESQL_USER**, **POSTGRESQL_PASS**, **POSTGRE_SQL_PORT** and **POSTGRESQL_DB_NAME** with your specific parameters.
- Seed your database with some test data by running `knex seed:run`. 
- **_Before running this command, make sure to export the DATABASE_URL environment variable in the 'env' object. For UNIX based systems, this'll look like `export DATABASE_URL=...`. For Windows systems this'll look like `set DATABASE_URL ...`. _**
- After seeding, you'll get a user in your database with and email of **test@gmail.com** and a password of **secret**. You'll also get some posts created with the user's id.
- Launch the server by running `npm run server`.
- Open your browser to `http://localhost:17000/main/login`

The authorization flow starts with the [oauth-consumer-app](https://github.com/kwameopareasiedu/oauth-consumer-app), so make sure to setup that project first. That's where you'll find the **login with oauth-service-provider** button.
