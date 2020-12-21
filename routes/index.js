//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
const apiRouter = require('express').Router();

//--- Import Routes ---
const bugsRouter = require('./bugs');
const projectsRouter = require('./projects');
const usersRouter = require('./users');

const jwt = require('jsonwebtoken');

//~~~~~~~~~~~~~~~~~~
//~~~ MIDDLEWARE ~~~
//~~~~~~~~~~~~~~~~~~

//Verify request sent from client.
apiRouter.use(async function (req, res, next) {
	const prefix = 'Bearer ';
	const auth = req.header('Authorization');

	if (!auth) next();
	else if (auth.startsWith(prefix)) {
		const token = auth.slice(prefix.length);

		try {
			const { _id } = jwt.verify(token, process.env.TOKEN_SECRET);

			if (_id) {
				console.log(_id);

				if (_id) {
				}
			}
		} catch (err) {
			res.status(403).send({ message: err });
		}
	} else res.status(403).send(`Authorization token must start with ${prefix}.`);
});

//--- API Connect Verification Message ---
apiRouter.get('/', (req, res) => {
	res.send({
		message: 'API is under construction.',
	});
});

//--- Route Middleware ---

apiRouter.use('/bugs', bugsRouter);
apiRouter.use('/projects', projectsRouter);
apiRouter.use('/users', usersRouter);

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
module.exports = apiRouter;
