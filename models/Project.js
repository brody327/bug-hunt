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
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		contributors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
		description: {
			type: String,
			default: 'None',
		},
		bugs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bug' }],
	},
	{ timestamps: true }
);

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
module.exports = mongoose.model('Project', ProjectSchema);
