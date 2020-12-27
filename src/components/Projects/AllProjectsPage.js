//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';
import { Link } from 'react-router-dom';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

//--- Components ---
import { ProjectCard } from './index';

//--- CSS ---
import '../../styles/components/AllProjectsPage.css';
import '../../styles/card-hover-effects.css';
import '../../styles/hover-card.css';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function AllProjectsPage({ userProjects, currentUser }) {
	//--- JSX ---
	return (
		<Container fluid>
			{currentUser !== null ? (
				<Row id='project-cards-container'>
					<Col className='col' lg={4} md={6} sm={12} xs={12}>
						<Link to={`/projects/new`}>
							<Card className='card new-project-card project-card rounded hover-parent background-primary card-corner-color-secondary'>
								<Card.Body className='text-center'>
									<Card.Title as='h1'>Create New Project</Card.Title>
								</Card.Body>
							</Card>
						</Link>
					</Col>
					{userProjects !== undefined
						? userProjects.map((project) => (
								<ProjectCard key={project._id} project={project} />
						  ))
						: ''}
				</Row>
			) : (
				<div>
					<p>
						Login or register to start tracking your projects and their bugs!
					</p>
					<p>register button</p>
					<p>login button</p>
				</div>
			)}
		</Container>
	);
}

export default AllProjectsPage;
