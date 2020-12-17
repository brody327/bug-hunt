//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
const usersRouter = require('express').Router();
const jwt = require('jsonwebtoken');

//--- Schema Imports ---
const User = require('../models/User');

//--- Validation Imports ---
const {
	registerValidation,
	loginValidation,
} = require('../services/validation');

//--- Hashing Imports ---
const { hashPassword, checkPassword } = require('../services/password_hashing');

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

	//Create new User. Hash users password.
	const user = new User({
		username: req.body.username,
		email: req.body.email,
		password: await hashPassword(req.body.password),
	});

	//Add new user to database.
	try {
		await user.save();
		res.send({ userId: user._id });
	} catch (err) {
		res.status(404);
		res.send({ message: err });
	}
});

//Login a user.
usersRouter.post('/login', async (req, res) => {
	//Validate user input data.
	const { error } = loginValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	//Check if user already exists.
	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send('Email does not exist.');

	//Check for password correct.
	const isValid = await checkPassword(req.body.password, user.password);
	if (!isValid) return res.status(400).send('Invalid password.');

	//Create and assign a JWT.
	const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
	res.header('auth-token', token).send(token);
});

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
module.exports = usersRouter;
