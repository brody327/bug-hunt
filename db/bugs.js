//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
//--- Schema Imports ---
const Bug = require('../models/Bug');

//~~~~~~~~~~~~~~~~~
//~~~ FUNCTIONS ~~~
//~~~~~~~~~~~~~~~~~
//--- GET Functions ---
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
//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
module.exports = { getAllUserBugs, createBug };
