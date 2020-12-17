//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
const Joi = require('joi');

//~~~~~~~~~~~~~~~~~
//~~~ FUNCTIONS ~~~
//~~~~~~~~~~~~~~~~~
//--- User Validations ---
//Registration Validation
const registerValidation = (data) => {
	const userSchema = Joi.object({
		username: Joi.string().min(6).max(16).required(),
		email: Joi.string().required().email(),
		password: Joi.string().min(6).required(),
	});

	return userSchema.validate(data);
};

//Login Validation
const loginValidation = (data) => {
	const userSchema = Joi.object({
		email: Joi.string().required().email(),
		password: Joi.string().min(6).required(),
	});

	return userSchema.validate(data);
};

const bugSchema = Joi.object({
	project_id: Joi.string().required(),
	title: Joi.string().required(),
	creator: Joi.string().required(),
});

const projectSchema = Joi.object({});

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
module.exports = {
	registerValidation,
	loginValidation,
};
