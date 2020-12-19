//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
const jwt = require('jsonwebtoken');

//~~~~~~~~~~~~~~~~~
//~~~ FUNCTIONS ~~~
//~~~~~~~~~~~~~~~~~
module.exports = async function (req, res, next) {
	const prefix = 'Bearer ';
	const auth = req.header('Authorization');

	if (!auth) next();
	else if (auth.startsWith(prefix)) {
		const token = auth.slice(prefix.length);

		try {
			const { _id } = jwt.verify(token, process.env.TOKEN_SECRET);

			if (_id) {
				console.log(_id);
				try {
				} catch (error) {}
			}
		} catch (err) {
			throw err;
		}
	} else res.status(403).send(`Authorization token must start with ${prefix}.`);
	// try {
	// 	const verified = jwt.verify(token, process.env.TOKEN_SECRET);
	// 	console.log(verified);
	// 	req.user = verified;
	// 	next();
	// } catch (err) {
	// 	res.status(400).send('Invalid token');
	// }
};
