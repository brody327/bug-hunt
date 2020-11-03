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
function ProjectPage({ match, location }) {
	//--- JSX ---
	return (
		<div>
			<h1>A Project</h1>
			<p>ID: {match.params.project}</p>
		</div>
	);
}

export default ProjectPage;
