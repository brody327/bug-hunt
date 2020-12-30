//~~~~~~~~~~~~~~~~~~
//~~~ MIDDLEWARE ~~~
//~~~~~~~~~~~~~~~~~~
//Send an error if a user is not logged in.
const requireUser = (req, res, next) => {
	if (!req.user) {
		res.status(403).send('You must be logged in as a user.');
	}
	next();
};

module.exports = {
	requireUser,
};
