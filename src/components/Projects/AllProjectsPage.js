//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//--- Components ---
import { RecentProjectCard } from '../Home/index';
import { ProjectCard } from './index';

//--- CSS ---
import '../../styles/components/AllProjectsPage.css';
import '../../styles/card-hover-effects.css';
import '../../styles/hover-card.css';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function AllProjectsPage({ userProjects }) {
	//--- JSX ---
	return (
		<Container fluid>
			<Row id='project-cards-container'>
				<Col className='col'>
					<Card className='card new-project-card project-card rounded hover-parent background-primary card-corner-color-secondary'>
						<Card.Body className='text-center'>
							<Card.Title as='h1'>Create New Project</Card.Title>
						</Card.Body>
					</Card>
				</Col>
				{userProjects !== undefined
					? userProjects.map((project) => (
							<ProjectCard key={project._id} project={project} />
					  ))
					: ''}
			</Row>
		</Container>
	);
}

export default AllProjectsPage;
