//~~~~~~~~~~~~~~~~~~~
//~~~~~ IMPORTS ~~~~~
//~~~~~~~~~~~~~~~~~~~
import axios from 'axios';

import { getConfig } from './index';

//~~~~~~~~~~~~~~~~~~~
//~~~~ VARIABLES ~~~~
//~~~~~~~~~~~~~~~~~~~
const BASE_URL = '/api';

//~~~~~~~~~~~~~~~~~~~
//~~~~ FUNCTIONS ~~~~
//~~~~~~~~~~~~~~~~~~~
//--- GET Functions ---
//Get all projects associated with a userId.
export async function getAllUserProjects(userId) {
	try {
		const { data } = await axios.get(`${BASE_URL}/projects/${userId}`);

		return data;
	} catch (err) {
		throw err.response;
	}
}

export async function getProjectByBugId(bugId) {
	try {
		const { data } = await axios.get(`${BASE_URL}/projects/${bugId}`);

		return data;
	} catch (err) {
		throw err.response;
	}
}

export async function getProjectById(projectId) {
	try {
		const { data } = axios.get(`${BASE_URL}/projects/${projectId}`);

		return data;
	} catch (err) {
		throw err.response;
	}
}

//--- POST Functions ---
//Create a new project.
export async function createProject(project) {
	try {
		const { data } = await axios.post(
			`${BASE_URL}/projects`,
			{
				...project,
			},
			getConfig()
		);

		return data;
	} catch (err) {
		throw err.response;
	}
}

//--- DELETE Functions ---
//Delete a specific project and the bugs associated with it.
export async function deleteProject(project) {
	try {
		const { data } = await axios.delete(`${BASE_URL}/projects/${project._id}`, {
			...getConfig(),
			data: project,
		});

		return data;
	} catch (err) {
		throw err.response;
	}
}

export async function completeProject(project) {
	try {
		const { data } = await axios.delete(
			`${BASE_URL}/projects/complete/${project._id}`,
			{
				...getConfig(),
				data: project,
			}
		);

		return data;
	} catch (err) {
		throw err.response;
	}
}
