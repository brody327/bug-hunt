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
			type: Number,
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
		// createdAt: {
		// 	type: Date,
		// 	required: true,
		// 	default: Date.now(),
		// },
		// lastUpdated: Date,
		description: String,
		priority: String,
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
