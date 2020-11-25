//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
const bugsRouter = require('express').Router();

//~~~~~~~~~~~~~~~~~~
//~~~ MIDDLEWARE ~~~
//~~~~~~~~~~~~~~~~~~
bugsRouter.get('/', (req, res, next) => {
	res.send({
		message: 'Bugs route is still under construction.',
	});
});

//--- GET Routes ---
//Get all user's bugs.
bugsRouter.get('/:userId', (req, res, next) => {});

//Get all project bugs.
bugsRouter.get('/:projectId', (req, res, next) => {});

//Get a specific bug.
bugsRouter.get('/:bugId', (req, res, next) => {});
//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
module.exports = bugsRouter;
