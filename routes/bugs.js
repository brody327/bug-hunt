//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
const bugsRouter = require('express').Router();

//--- Schema Imports ---
const Bug = require('../models/Bug');

//--- Validation Imports ---
const { bugValidation } = require('../services/validation');

//--- Authentication Imports ---
const { requireUser } = require('../services/requireUser');

//--- Database Imports ---
const {
	createBug,
	getProjectByProjectId,
	getAllUserBugs,
	updateProjectBugs,
} = require('../db/index');

//~~~~~~~~~~~~~~~~~~
//~~~ MIDDLEWARE ~~~
//~~~~~~~~~~~~~~~~~~
//--- GET Routes ---
//Get all user's bugs.
bugsRouter.get('/:userId', async (req, res) => {
	try {
		const bugs = await getAllUserBugs(req.params.userId);
		if (!bugs) return res.status(400).send('No bugs for this user.');

		//Sort projects by most recent.
		bugs.sort((a, b) => {
			return new Date(b.updatedAt) - new Date(a.updatedAt);
		});

		res.send({ message: 'User bugs retrieved!', bugs });
	} catch (err) {
		res.status(404);
		res.send({ message: err });
	}
});

//Get all project bugs.
bugsRouter.get('/:projectId', (req, res) => {});

//Get a specific bug.
bugsRouter.get('/:bugId', (req, res) => {});

//--- POST Routes ---
//Post a new bug to a given project.
bugsRouter.post('/:projectId', requireUser, async (req, res) => {
	//Check for valid entry
	const { error } = await bugValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	//Check for valid projectId
	const projectExists = await getProjectByProjectId(req.body.project_id);
	if (!projectExists) return res.status(400).send('Project does not exist.');

	//TODO: Check for bug name in project bugs?

	try {
		//Create bug.
		const bug = await createBug({
			project_id: req.body.project_id,
			title: req.body.title,
			creator: req.body.creator,
			priority: req.body.priority,
			description: req.body.description,
		});

		//Add bug id to project bugs.
		await updateProjectBugs(req.body.project_id, bug._id);
		// await updateProject(req.body.project_id, req.body.creator, {
		// 	bugs: bug._id,
		// });

		res.send({
			message: 'Bug created successfully!',
			bug,
		});
	} catch (err) {
		res.status(400);
		res.send({ message: err });
	}
});

//--- PATCH Routes ---
//Updates a given bug's content.
bugsRouter.patch('/:bugId', (req, res) => {});

//--- DELETE Routes ---
//Deletes a given bug.
bugsRouter.delete('/:bugId', (req, res) => {});
//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
module.exports = bugsRouter;
