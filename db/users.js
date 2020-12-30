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

//TODO: Get user by username.
const getUserByUsername = async (username) => {
	try {
		const user = await User.findOne({ username: username });

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

//--- UPDATE Functions ---
//Updates users project count.
const updateUserProjectCount = async (userId) => {
	try {
		await User.findOneAndUpdate(
			{ _id: userId },
			{ $inc: { 'stats.projectCount': 1 } }
		);
	} catch (err) {
		throw err;
	}
};

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
module.exports = {
	getUserById,
	getUserByEmail,
	getUserByUsername,
	createUser,
	updateUserProjectCount,
};
