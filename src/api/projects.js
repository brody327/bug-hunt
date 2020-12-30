//~~~~~~~~~~~~~~~~~~~
//~~~~~ IMPORTS ~~~~~
//~~~~~~~~~~~~~~~~~~~
import axios from 'axios';

import { config } from './index';

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
		throw err;
	}
}

//--- POST Functions ---
//Create a new project.
export async function createProject(project) {
	try {
		console.log('API PROJECT DATA:', project);
		const { data } = await axios.post(
			`${BASE_URL}/projects`,
			{
				...project,
			},
			config
		);

		return data;
	} catch (err) {
		throw err;
	}
}
