//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---

//--- Components ---

//--- CSS ---

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function Bug({ match, location }) {
	//--- JSX ---
	const bug = location.state.bug;
	return (
		<div>
			<h1>{bug.title}</h1>
			<p>ID: {bug._id}</p>
			<p>Name: {bug.title}</p>
			<p>{bug.creator}</p>
			<p>{bug.createdAt}</p>
			<p>bug description</p>
			<p>{bug.priority}</p>
			<p>Comments Component</p>
		</div>
	);
}

export default Bug;
