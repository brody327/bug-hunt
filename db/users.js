//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
//--- Schema Imports ---
const User = require('../models/User');
//~~~~~~~~~~~~~~~~~
//~~~ FUNCTIONS ~~~
//~~~~~~~~~~~~~~~~~

//--- GET Functions ---
//Get user data by id.
const getUserById = async (userId) => {
	try {
		const user = await User.findOne({ _id: userId });

		return user;
	} catch (err) {
		throw err;
	}
};

//Get user data by email.
const getUserByEmail = async (email) => {
	try {
		const user = await User.findOne({ email: email });

		return user;
	} catch (err) {
		throw err;
	}
};

//--- POST Functions ---
//Create new User.
const createUser = async ({ username, email, password }) => {
	const user = new User({
		username,
		email,
		password,
	});

	//Add new user to database.
	try {
		await user.save();

		return user;
	} catch (err) {
		throw err;
	}
};

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
module.exports = { getUserById, getUserByEmail, createUser };
