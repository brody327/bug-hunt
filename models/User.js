//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
const mongoose = require('mongoose');

//~~~~~~~~~~~~~~~
//~~~ SCHEMAS ~~~
//~~~~~~~~~~~~~~~
const UserSchema = mongoose.Schema(
	{
		username: {
			type: String,
			lowercase: true,
			minLength: [6, 'must be at least 6 characters long'],
			maxLength: [16, 'must be at most 16 characters long'],
			required: [true, 'A username is required'],
			match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
		},
		password: {
			type: String,
			lowercase: true,
			required: [true, 'A password is required'],
		},
		email: {
			type: String,
			required: [true, 'An email is required'],
			match: [/\S+@\S+\.\S+/, 'is invalid'],
		},
		company: String,
		game: {
			score: {
				type: Number,
				default: 0,
			},
			rank: {
				type: String,
				default: 'Recruit',
			},
		},
		stats: {
			projectCount: {
				type: Number,
				default: 0,
			},
			bugsFixedCount: {
				type: Number,
				default: 0,
			},
			completedProjectCount: {
				type: Number,
				default: 0,
			},
		},
	},
	{ timestamps: true }
);

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
module.exports = mongoose.model('User', UserSchema);
