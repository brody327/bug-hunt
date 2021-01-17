//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
//--- Schema Imports ---
const Bug = require('../models/Bug');

//~~~~~~~~~~~~~~~~~
//~~~ FUNCTIONS ~~~
//~~~~~~~~~~~~~~~~~
//--- GET Functions ---
//Get a bug using its id.
const getBugById = async (id) => {
	try {
		const bug = await Bug.findById(id);

		return bug;
	} catch (err) {
		throw err;
	}
};
//Gets all user bugs.
const getAllUserBugs = async (userId) => {
	try {
		const bugs = await Bug.find({ 'creator._id': userId });
		bugs.push(...(await Bug.find({ assignee: userId })));

		return bugs;
	} catch (err) {
		throw err;
	}
};

//--- POST Functions ---
const createBug = async ({
	project_id,
	title,
	creator,
	priority,
	description,
}) => {
	const bug = new Bug({
		project_id,
		title,
		creator,
		priority,
		description,
	});

	try {
		await bug.save();

		return bug;
	} catch (err) {
		throw err;
	}
};

//--- DELETE Functions ---
//Delete a bug given a bug id and the bug's project id.
const deleteBug = async (bugId) => {
	try {
		const bug = await Bug.findByIdAndDelete(bugId);

		return bug;
	} catch (err) {
		throw err;
	}
};
//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
module.exports = { getBugById, getAllUserBugs, createBug, deleteBug };
