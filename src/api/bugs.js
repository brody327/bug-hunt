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
//Get a bug using its id.
export const getBugById = async (id) => {
	try {
		const { data } = await axios.get(`${BASE_URL}/bugs/bug/${id}`);

		return data;
	} catch (err) {
		throw err.response;
	}
};

//Get all user bugs associated with a user id.
export const getAllUserBugs = async (userId) => {
	try {
		const { data } = await axios.get(`${BASE_URL}/bugs/${userId}`);

		return data;
	} catch (err) {
		throw err.response;
	}
};

//--- POST Functions ---
export const createBug = async (bug) => {
	try {
		const { data } = await axios.post(
			`${BASE_URL}/bugs/${bug.project_id}`,
			{
				...bug,
			},
			getConfig()
		);

		return data;
	} catch (err) {
		throw err.response;
	}
};
