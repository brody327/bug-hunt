//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
const mongoose = require('mongoose');

//~~~~~~~~~~~~~~~
//~~~ SCHEMAS ~~~
//~~~~~~~~~~~~~~~
const ProjectSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		creator: {
			_id: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
				required: true,
			},
			username: { type: String },
		},
		contributors: [
			{
				_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
				username: { type: String },
			},
		],
		description: {
			type: String,
			default: 'None',
		},
		bugs: [
			{
				_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Bug' },
				name: { type: String },
			},
		],
	},
	{ timestamps: true }
);

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
module.exports = mongoose.model('Project', ProjectSchema);
