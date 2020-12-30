//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
//--- Schema Imports ---
const Project = require('../models/Project');

//~~~~~~~~~~~~~~~~~
//~~~ FUNCTIONS ~~~
//~~~~~~~~~~~~~~~~~
//--- GET Functions ---
//Get a project by id.
const getProjectByProjectId = async (projectId) => {};

//Get all projects by user id.
const getAllProjectsByUserId = async (userId) => {
	try {
		const projects = await Project.find({ contributors: userId });

		return projects;
	} catch (err) {
		throw err;
	}
};

//Get project by name.
const getProjectByName = async (title) => {
	try {
		const project = await Project.findOne({ title: title });

		return project;
	} catch (err) {
		throw err;
	}
};

//--- POST Functions ---
//Create a new project.
const createProject = async ({ title, creator, description }) => {
	console.log('GOT PROJECT DATA TO DB');
	const project = new Project({
		title,
		creator,
		description,
		contributors: [creator],
	});

	try {
		await project.save();
		console.log('created project!');

		return project;
	} catch (err) {
		throw err;
	}
};
//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
module.exports = { getProjectByName, getAllProjectsByUserId, createProject };
