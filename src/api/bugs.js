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
//Create a bug given the passed bug data.
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

//--- DELETE Functions ---
//Delete a bug given a bug id and the associated project id.
export const deleteBug = async (bugId, projectId) => {
	try {
		const { data } = await axios.delete(
			`${BASE_URL}/bugs/${projectId}/${bugId}`,
			getConfig()
		);

		return data;
	} catch (err) {
		throw err.response;
	}
};

export const completeBug = async (projectId, bugId, userId, fields) => {
	try {
		const { data } = await axios.delete(
			`${BASE_URL}/bugs/complete/${projectId}/${bugId}`,
			{
				data: { fields, userId },
				...getConfig(),
			}
		);

		return data;
	} catch (err) {
		throw err.response;
	}
};
