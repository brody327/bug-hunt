//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
const bugsRouter = require('express').Router();

//--- Schema Imports ---
const Bug = require('../models/Bug');

//--- Validation Imports ---
const { bugValidation } = require('../services/validation');

//--- Authentication Imports ---
const verify = require('../services/verifyToken');

//~~~~~~~~~~~~~~~~~~
//~~~ MIDDLEWARE ~~~
//~~~~~~~~~~~~~~~~~~
bugsRouter.get('/', (req, res) => {
	res.send({
		message: 'Bugs route is still under construction.',
	});
});

//--- GET Routes ---
//Get all user's bugs.
bugsRouter.get('/:userId', (req, res) => {
	try {
	} catch (err) {
		res.status();
	}
});

//Get all project bugs.
bugsRouter.get('/:projectId', (req, res) => {});

//Get a specific bug.
bugsRouter.get('/:bugId', (req, res) => {});

//--- POST Routes ---
//Post a new bug to a given project.
bugsRouter.post('/:projectId', verify, async (req, res) => {
	//Check for valid entry
	const { error } = await bugValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const bug = new Bug({
		project_id: req.body.project_id,
		title: req.body.title,
		creator: req.body.creator,
		priority: req.body.priority,
	});

	try {
		await bug.save(function (err) {
			if (err) throw err;
			res.send({
				message: 'Bug created successfully!',
				bug,
			});
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
