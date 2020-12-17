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
			type: String,
			required: true,
		},
		contributors: [String],
		description: String,
		bugs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bug' }],
	},
	{ timestamps: true }
);

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
module.exports = mongoose.model('Project', ProjectSchema);
