//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
const mongoose = require('mongoose');

//~~~~~~~~~~~~~~~
//~~~ SCHEMAS ~~~
//~~~~~~~~~~~~~~~
const BugSchema = mongoose.Schema(
	{
		// project_id: Number,
		project_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Project',
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: String,
		creator: {
			type: String,
			required: true,
		},
		assignee: String,
		description: String,
		priority: {
			type: String,
			required: true,
		},
		comments: [
			{
				_id: Number,
				content: String,
				creator: String,
				createdAt: Date,
				lastUpdated: Date,
			},
		],
	},
	{ timestamps: true }
);

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
module.exports = mongoose.model('Bug', BugSchema);
