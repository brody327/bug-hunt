//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';
import { useHistory, Link } from 'react-router-dom';

//--- Bootstrap ---
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
//--- Components ---

//--- CSS ---
import '../../styles/components/ProjectCard.css';
//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function ProjectCard({ project }) {
	//--- Functions ---
	return (
		<Col className='col' xl={4}>
			<Link to={`/projects/${project.title}`}>
				<Card className='project-card rounded hover-parent background-secondary'>
					<h1>{project.title}</h1>
				</Card>
			</Link>
		</Col>
	);
}

export default ProjectCard;
