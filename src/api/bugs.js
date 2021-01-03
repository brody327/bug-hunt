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
export const getAllUserBugs = async (userId) => {
	try {
		const { data } = await axios.get(`${BASE_URL}/bugs/${userId}`);

		return data;
	} catch (err) {
		throw err;
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

		console.log(data);

		return data;
	} catch (err) {
		throw err;
	}
};
