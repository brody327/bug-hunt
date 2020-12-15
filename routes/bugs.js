//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
const bugsRouter = require('express').Router();

//--- Schema Imports ---
const Bug = require('../models/Bug');

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

//--- POST Routes ---
//Post a new bug to a given project.
bugsRouter.post('/:projectId', async (req, res, next) => {
	const bug = new Bug({
		project_id: req.body.project_id,
		title: req.body.title,
		creator: req.body.creator,
		createdAt: Date.now(),
	});

	console.log(bug);

	try {
		await bug.save(function (err) {
			if (err) throw err;
			res.end('Author successfully saved.');
		});
	} catch (error) {
		res.status(404);
		res.send({ message: error });
	}
	// bug
	// 	.save()
	// 	.then((data) => {
	// 		res.json(data);
	// 	})
	// 	.catch((err) => {
	// 		res.status(200);
	// 		res.json({ message: err });
	// 	});
});

//--- PATCH Routes ---
//Updates a given bug's content.
bugsRouter.patch('/:bugId', (req, res, next) => {});

//--- DELETE Routes ---
//Deletes a given bug.
bugsRouter.delete('/:bugId', (req, res, next) => {});
//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
module.exports = bugsRouter;
