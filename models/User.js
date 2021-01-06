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
			required: [true, 'A password is required'],
			minLength: [8, 'must be at least 8 characters long'],
			required: true,
			// match: [/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'is invalid']
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
		projects: [
			{
				_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
				name: { type: String },
			},
		],
		bugs: [
			{
				_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Bug' },
				username: { type: String },
			},
		],
		company: {
			type: String,
			default: 'None',
		},
	},
	{ timestamps: true }
);

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
module.exports = mongoose.model('User', UserSchema);
