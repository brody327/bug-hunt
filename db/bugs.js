//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
//--- Schema Imports ---
const Bug = require('../models/Bug');

//~~~~~~~~~~~~~~~~~
//~~~ FUNCTIONS ~~~
//~~~~~~~~~~~~~~~~~
//--- GET Functions ---

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
module.exports = { createBug };
