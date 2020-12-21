//~~~~~~~~~~~~~~~~~~~
//~~~~~ IMPORTS ~~~~~
//~~~~~~~~~~~~~~~~~~~
import axios from 'axios';

//~~~~~~~~~~~~~~~~~~~
//~~~~ VARIABLES ~~~~
//~~~~~~~~~~~~~~~~~~~
const BASE_URL = '/api';

//~~~~~~~~~~~~~~~~~~~
//~~~~ FUNCTIONS ~~~~
//~~~~~~~~~~~~~~~~~~~
//--- GET Functions ---
//Get a user by id.
export const getUserById = async (userId) => {
	try {
		const { data } = await axios.get(`${BASE_URL}/users/${userId}`);

		return data;
	} catch (err) {
		throw err;
	}
};

//--- POST Functions ---
//Registers a new user.
export const createUser = async (user) => {
	try {
		const { data } = await axios.post(`${BASE_URL}/users/register`, {
			...user,
		});

		return data;
	} catch (err) {
		throw err;
	}
};

//Login an existing user.
export const loginUser = async ({ email, password }) => {
	try {
		const { data } = await axios.post(`${BASE_URL}/users/login`, {
			email,
			password,
		});
		delete data.user.password;
		console.log(data);
		return data;
	} catch (err) {
		throw err;
	}
};
