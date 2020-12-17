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

//--- POST Functions ---
//Registers a new user.
export async function createUser(user) {
	console.log('FE API:', user);
	try {
		const { data } = await axios.post(`${BASE_URL}/users/register`, {
			...user,
		});

		return data;
	} catch (err) {
		throw err;
	}
}
