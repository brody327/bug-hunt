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
				<Card className='card project-card rounded hover-parent background-secondary card-corner-color-primary'>
					<Card.Body>
						<Card.Title as='h1'>{project.title}</Card.Title>
						<Card.Subtitle as='h4'>
							Last Updated: {project.lastUpdated}
						</Card.Subtitle>
						<Card.Text className='hover-child fade-in-full'>
							Created By: {project.creator}
						</Card.Text>
						<Card.Text className='hover-child fade-in-full'>
							Contributors: {project.contributors.join(', ')}
						</Card.Text>
					</Card.Body>
				</Card>
			</Link>
		</Col>
	);
}

export default ProjectCard;
