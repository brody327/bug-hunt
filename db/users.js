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
		const user = await User.findById(userId);

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
//Updates users project count. True direction means increment by one. False direction means decrement by one.
const updateUserProjectCount = async (userId, direction) => {
	try {
		if (direction) {
			return await User.findOneAndUpdate(
				{ _id: userId },
				{ $inc: { 'stats.projectCount': 1 } },
				{ new: true }
			);
		} else {
			return await User.findOneAndUpdate(
				{ _id: userId },
				{ $inc: { 'stats.projectCount': -1 } },
				{ new: true }
			);
		}
	} catch (err) {
		throw err;
	}
};

//Update a users stats given a value and field.
const updateUserStats = async (userId, fields = {}) => {
	try {
		let newUser = null;
		for (const property in fields) {
			const field = `stats.${property}`;

			newUser = await User.findOneAndUpdate(
				{ _id: userId },
				{ $inc: { [field]: fields[property] } },
				{ new: true }
			);
		}
		return newUser;
	} catch (err) {
		throw err;
	}
};

//Update a users game stats given a value and field.
const updateUserGameStats = async (userId, fields = {}) => {
	try {
		let newUser = null;
		console.log(fields);
		for (const property in fields) {
			const field = `game.${property}`;

			console.log(fields[property]);

			if (field === 'game.score') {
				newUser = await User.findOneAndUpdate(
					{ _id: userId },
					{ $inc: { [field]: fields[property] } },
					{ new: true }
				);
			} else {
				newUser = await User.findOneAndUpdate(
					{ _id: userId },
					{ $set: { [field]: fields[property] } },
					{ new: true },
					function (err) {
						if (err) console.log(err);
						console.log('Successful update');
					}
				);
			}
		}
		console.log(newUser);
		return newUser;
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
	updateUserStats,
	updateUserGameStats,
};
