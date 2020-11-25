//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
const apiRouter = require('express').Router();

//--- Import Routes ---
const bugsRouter = require('./bugs');
const projectsRouter = require('./projects');
const usersRouter = require('./users');

//~~~~~~~~~~~~~~
//~~~ ROUTES ~~~
//~~~~~~~~~~~~~~

//--- API Connect Verification Message ---
apiRouter.get('/', (req, res, next) => {
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
