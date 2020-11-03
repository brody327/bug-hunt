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
			<h1>A Bug</h1>
			<p>ID: {match.params.bug}</p>
			<p>Name: {bug.title}</p>
		</div>
	);
}

export default Bug;
