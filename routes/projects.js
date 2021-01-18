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
	getProjectByProjectId,
	createProject,
	getAllProjectsByUserId,
	updateUserProjectCount,
	getProjectByBugId,
	deleteBug,
	deleteProject,
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

		//Sort projects by most recent.
		projects.sort((a, b) => {
			return new Date(b.updatedAt) - new Date(a.updatedAt);
		});

		res.send({ message: 'User projects retrieved!', projects });
	} catch (err) {
		res.status(404);
		res.send({ message: err });
	}
});

//Get project by bug id.
projectsRouter.get('/:bugId', async (req, res) => {
	try {
		const project = await getProjectByBugId(req.params.bugId);
		if (!project)
			return res.status(400).send('No project was found for this bug.');

		res.send({ message: 'Bugs project was successfully retrieved!', project });
	} catch (err) {
		res.status(404);
		res.send({ message: err });
	}
});

//Get project by project id.
projectsRouter.get('/:projectId', async (req, res) => {
	try {
		const project = await getProjectByProjectId(req.params.projectId);
		if (!project) return res.status(400).send('No project was found.');

		res.send({ message: 'Project was successfully retrieved!', project });
	} catch (err) {
		res.status(404).send({ message: err });
	}
});

//--- POST Routes ---
//Create new project.
projectsRouter.post('/', requireUser, async (req, res) => {
	//Check for valid data entry.
	const { error } = await projectValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	//Check for existing project.
	//TODO: Only check for existing project name for user id?
	const projectExists = await getProjectByName(req.body.title);
	if (projectExists)
		return res.status(400).send('Project name already exists.');

	try {
		//Create new project.
		const project = await createProject({
			title: req.body.title,
			creator: req.body.creator,
			description: req.body.description,
		});

		//Increment users project count.
		await updateUserProjectCount(req.body.creator);

		res.send(project);
	} catch (err) {
		res.status(400);
		res.send({ message: err });
	}
});

//--- UPDATE Routes ---

//--- DELETE Routes ---
//Delete a project and its bugs.
projectsRouter.delete('/:projectId', requireUser, async (req, res) => {
	const project = req.body;
	console.log('This is the project data:', project);

	try {
		//Delete bugs from project bugs array.
		await Promise.all(project.bugs.map((bug) => deleteBug(bug._id)));

		//Delete project.
		const deletedProject = await deleteProject(project._id);
		console.log('Deleted PRoject:', deletedProject);

		//Decrement project count from users.
		res.send({
			message:
				'Project and its associated bugs have been successfully deleted!',
			project: deletedProject,
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
