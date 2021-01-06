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

//--- Bug Validation ---
const bugValidation = (data) => {
	const bugSchema = Joi.object({
		project_id: Joi.string().required(),
		title: Joi.string().required(),
		creator: Joi.object().required(),
		priority: Joi.string().required(),
		description: Joi.string().empty('').default('None'),
	});

	return bugSchema.validate(data);
};

//--- Project Validation ---
const projectValidation = (data) => {
	const projectSchema = Joi.object({
		title: Joi.string().required(),
		creator: Joi.object().required(),
		description: Joi.string().allow(''),
	});

	return projectSchema.validate(data);
};

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
module.exports = {
	registerValidation,
	loginValidation,
	bugValidation,
	projectValidation,
};
