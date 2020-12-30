//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
const projectsRouter = require('express').Router();

//--- Validation Imports ---
const { projectValidation } = require('../services/validation');

//--- Authentication Imports ---
const { requireUser } = require('../services/requireUser');

//--- Database Imports ---
const {
	getProjectByName,
	createProject,
	getAllProjectsByUserId,
	updateUserProjectCount,
} = require('../db/index');

//~~~~~~~~~~~~~~~~~~
//~~~ ROUTES ~~~
//~~~~~~~~~~~~~~~~~~
//--- GET Routes ---
//Get all projects by user id.
projectsRouter.get('/:userId', async (req, res) => {
	try {
		const projects = await getAllProjectsByUserId(req.params.userId);
		if (!projects) return res.status(400).send('No projects for this user.');

		res.send({ message: 'User projects retrieved!', projects });
	} catch (err) {
		res.status(404);
		res.send({ message: err });
	}
});

//--- POST Routes ---
//Create new project.
//TODO: FIX REQUIRE USER
projectsRouter.post('/', async (req, res) => {
	console.log('PRO Data:', req.body);
	//Check for valid data entry.
	const { error } = await projectValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	console.log('check valid data');

	//Check for existing project.
	const projectExists = await getProjectByName(req.body.title);
	if (projectExists)
		return res.status(400).send('Project name already exists.');
	console.log('check exsisting project');

	try {
		//Create new project.
		console.log('Creating project');
		const project = await createProject({
			title: req.body.title,
			creator: req.body.creator,
			description: req.body.description,
		});

		console.log('Created! project');
		//Increment users project count.
		await updateUserProjectCount(req.body.creator);

		res.send(project);
	} catch (err) {
		res.status(400);
		res.send({ message: err });
	}
});
//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
module.exports = projectsRouter;
