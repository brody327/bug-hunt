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
const getProjectByProjectId = async (projectId) => {
	try {
		const project = await Project.findById(projectId);

		return project;
	} catch (err) {
		throw err;
	}
};

//Get all projects by user id.
const getAllProjectsByUserId = async (userId) => {
	try {
		const projects = await Project.find({ 'contributors._id': userId });

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

//Get project by bug id.
const getProjectByBugId = async (bugId) => {
	try {
		const project = await Project.findOne({ 'bugs._id': bugId });

		return project;
	} catch (err) {
		throw err;
	}
};

//--- POST Functions ---
//Create a new project.
const createProject = async ({ title, creator, description }) => {
	const project = new Project({
		title,
		creator,
		description,
		contributors: [creator],
	});

	try {
		await project.save();

		return project;
	} catch (err) {
		throw err;
	}
};

//--- UPDATE Routes ---
const updateProjectBugs = async (projectId, bug) => {
	try {
		//TODO: Check for unable to update/find project
		const updatedProject = await Project.findByIdAndUpdate(
			projectId,
			{ $push: { bugs: bug } },
			{ new: true }
		);

		return updatedProject;
	} catch (err) {
		throw err;
	}
};

const deleteProjectBug = async (projectId, bugId) => {
	try {
		const updatedProject = await Project.findByIdAndUpdate(
			projectId,
			{ $pull: { bugs: { _id: bugId } } },
			{ new: true }
		);

		return updatedProject;
	} catch (err) {
		throw err;
	}
};

//--- DELETE Routes ---
//Delete a project given its project id.
const deleteProject = async (projectId) => {
	try {
		const deletedProject = await Project.findByIdAndDelete(
			projectId,
			function (err) {
				if (err) console.log(err);
				console.log('Successful deletion');
			}
		);

		return deletedProject;
	} catch (err) {
		throw err;
	}
};
//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
module.exports = {
	getProjectByProjectId,
	getProjectByName,
	getAllProjectsByUserId,
	getProjectByBugId,
	createProject,
	updateProjectBugs,
	deleteProjectBug,
	deleteProject,
};
