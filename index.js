//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
//--- Server Imports ---
//Defines the web server.
const express = require('express');
const server = express();

//--- Database Imports & Variables ---
//Creates the database connection.
const mongoose = require('mongoose');

//Use dotenv for credentials.
require('dotenv/config');

//Uses env port or 3000 if it does not exist.
const PORT = process.env.PORT || 3000;

//--- Middleware Imports ---
//Used for logging.
const morgan = require('morgan');

//Handles app/json requests.
const bodyParser = require('body-parser');

//Manages static files.
const path = require('path');

//--- Routes Imports ---
const apiRouter = require('./routes');

//~~~~~~~~~~~~~~~~~~
//~~~ MIDDLEWARE ~~~
//~~~~~~~~~~~~~~~~~~
//Sets logging information and color to 'dev'.
server.use(morgan('dev'));

//Looks at where content-type is JSON.
server.use(bodyParser.json());

//Sets static files to use the path from their directory.
server.use(express.static(path.join(__dirname, 'build')));

//Used for connection between api path and the routes.
server.use('/api', apiRouter);

//Used in case route is not recognized. Sends react app instead.
server.use((req, res, next) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//Listens for connections on the PORT.
server.listen(PORT, async () => {
	console.log(`Bug Hunt is running on ${PORT}`);
	try {
		//Connect to Mongoose for MongoDB connection.
		await mongoose.connect(
			process.env.DB_CONNECTION,
			{ useNewUrlParser: true, useUnifiedTopology: true },
			() => console.log('Connected to Bug Hunt DB!')
		);
		console.log('Database is running!');
	} catch (error) {
		console.error('Database is closed!\n', error);
	}
});
