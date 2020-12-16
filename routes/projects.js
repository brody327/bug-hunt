//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
const projectsRouter = require('express').Router();

//~~~~~~~~~~~~~~~~~~
//~~~ ROUTES ~~~
//~~~~~~~~~~~~~~~~~~
projectsRouter.get('/', (req, res) => {
	res.send({
		message: 'Projects route is still under construction.',
	});
});

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
module.exports = projectsRouter;
