//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
const apiRouter = require('express').Router();

//--- Import Routes ---
const bugsRouter = require('./bugs');
const projectsRouter = require('./projects');
const usersRouter = require('./users');

const jwt = require('jsonwebtoken');

//--- Database Imports ---
const { getUserById } = require('../db/index');

//~~~~~~~~~~~~~~~~~~
//~~~ MIDDLEWARE ~~~
//~~~~~~~~~~~~~~~~~~

//Verify request sent from client.
apiRouter.use(async function (req, res, next) {
	const prefix = 'Bearer ';
	const auth = req.header('Authorization');

	console.log('Checking authorization header', auth);

	if (!auth) next();
	else if (auth.startsWith(prefix)) {
		const token = auth.slice(prefix.length);

		try {
			const { _id } = jwt.verify(token, process.env.TOKEN_SECRET);

			if (_id) {
				req.user = await getUserById(_id);

				next();
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

//--- Error Handler Middleware ---
// apiRouter.use((req, res, next) => {
// 	console.log('here');
// 	const error = new Error('Not Found');
// 	error.status = 404;
// 	next(error);
// });

// apiRouter.use((error, req, res, next) => {
// 	console.log('this is the error ', error);
// 	res.status(error.status || 500);
// 	res.send({
// 		error: {
// 			message: error.message,
// 		},
// 	});
// });

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
module.exports = apiRouter;
