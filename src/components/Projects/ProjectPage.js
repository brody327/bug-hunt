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
			<p>Project Info</p>
			<p>Project Creator</p>
			<p>Delete Project</p>
			<p>Complete Project</p>
			<p>Project Contributors</p>
			<p>Project Stats</p>
			<p>Project Bugs</p>
			<p>Delete Bug</p>
			<p>Create Bug</p>
		</div>
	);
}

export default ProjectPage;
