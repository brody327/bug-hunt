//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
const usersRouter = require('express').Router();

//--- Schema Imports ---
const User = require('../models/User');

//--- Validation Imports ---
const { registerValidation } = require('../services/validation');

//~~~~~~~~~~~~~~~~~~
//~~~ ROUTES ~~~
//~~~~~~~~~~~~~~~~~~
usersRouter.get('/', (req, res) => {
	res.send({
		message: 'Users route is still under construction.',
	});
});

//--- POST Routes ---
//Register a new user.
usersRouter.post('/register', async (req, res) => {
	//Validate user input data.
	const { error } = registerValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	//Check if user already exists.
	const emailExists = await User.findOne({ email: req.body.email });
	if (emailExists) return res.status(400).send('Email already exists.');

	//Create new User.
	const user = new User({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
	});

	try {
		await user.save();
		res.send(user);
	} catch (err) {
		res.status(404);
		res.send({ message: err });
	}
});

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
module.exports = usersRouter;
