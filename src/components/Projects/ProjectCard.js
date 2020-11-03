//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';
import Card from 'react-bootstrap/Card';

//--- Bootstrap ---

//--- Components ---

//--- CSS ---
import '../../styles/components/Home.css';
//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function ProjectCard() {
	return (
		<Card className='project-card rounded hover-parent background-secondary '>
			<h1>Project</h1>
		</Card>
	);
}

export default ProjectCard;
