//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
const usersRouter = require('express').Router();
const jwt = require('jsonwebtoken');

//--- Validation Imports ---
const {
	registerValidation,
	loginValidation,
} = require('../services/validation');

//--- Hashing Imports ---
const { hashPassword, checkPassword } = require('../services/passwordHashing');

//--- Database Imports ---
const {
	getUserById,
	getUserByEmail,
	getUserByUsername,
	createUser,
} = require('../db/index');

//~~~~~~~~~~~~~~~~~~
//~~~ ROUTES ~~~
//~~~~~~~~~~~~~~~~~~
usersRouter.get('/', (req, res) => {
	res.send({
		message: 'Users route is still under construction.',
	});
});

//--- GET Routes ---
//Gets user data given a user id.
usersRouter.get('/:userId', async (req, res) => {
	const user = await getUserById(req.body.userId);
	if (!user) return res.status(400).send('User does not exist.');

	res.send({
		message: 'User data retrieved successfully.',
		user: {
			username: user.username,
			email: user.email,
			game: user.game,
			stats: user.stats,
			projects: user.projects,
			bugs: user.bugs,
			createdAt: user.createdAt,
			updatedAt: user.updatedAt,
		},
	});
});

//--- POST Routes ---
//Register a new user.
usersRouter.post('/register', async (req, res) => {
	//Validate user input data.
	const { error } = registerValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	try {
		//Check if user already exists.
		const emailExists = await getUserByEmail(req.body.email);
		if (emailExists) return res.status(400).send('Email already exists.');

		//TODO: Check if username already exists
		const usernameExists = await getUserByUsername(req.body.username);
		if (usernameExists) return res.status(400).send('Username already exists.');

		//Hashes users password.
		const hashedPassword = await hashPassword(req.body.password);

		//Sends user info to DB.
		const user = await createUser({
			username: req.body.username,
			email: req.body.email,
			password: hashedPassword,
		});

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

	try {
		//Check if user already exists.
		const user = await getUserByEmail(req.body.email);
		if (!user) return res.status(400).send('Email does not exist.');

		//Check for password correct.
		const isValid = await checkPassword(req.body.password, user.password);
		if (!isValid) return res.status(400).send('Invalid password.');

		//Create and assign a JWT.
		const token = jwt.sign(
			{ _id: user._id, username: user.username },
			process.env.TOKEN_SECRET,
			{ expiresIn: '24h' }
		);
		res.header('Authorization', `Bearer ${token}`).send(token);
	} catch (err) {
		res.status(400).send({ message: err });
	}
});

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
module.exports = usersRouter;
