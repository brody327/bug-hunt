//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
const projectsRouter = require('express').Router();

//--- Schema Imports ---
const Project = require('../models/Project');

//--- Validation Imports ---
const { projectValidation } = require('../services/validation');

//--- Authentication Imports ---
const verify = require('../services/verifyToken');

//~~~~~~~~~~~~~~~~~~
//~~~ ROUTES ~~~
//~~~~~~~~~~~~~~~~~~
projectsRouter.get('/', (req, res) => {
	res.send({
		message: 'Projects route is still under construction.',
	});
});

//--- GET Routes ---

//--- POST Routes ---
//Create new project.
projectsRouter.post('/', verify, async (req, res) => {
	console.log(req.body);
	//Check for valid data entry.
	const { error } = await projectValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	//Check for existing project.
	const projectExists = await Project.findOne({ title: req.body.title });
	if (projectExists)
		return res.status(400).send('Project title already exists.');

	const project = new Project({
		title: req.body.title,
		creator: req.body.creator,
		description: req.body.description,
	});

	try {
		await project.save(function (err) {
			if (err) throw err;
			res.send({
				message: 'Project was created successfully!',
				project,
			});
		});
	} catch (err) {
		res.status(400);
		res.send({ message: err });
	}
});
//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
module.exports = projectsRouter;
