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
import Button from 'react-bootstrap/Button';

//--- Components ---
import { ProjectCard } from './index';
import { Loading } from '../Loading/index';

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
				<>
					<h1 className='text-center'>My Projects</h1>
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
						{userProjects !== undefined ? (
							userProjects.map((project) => (
								<ProjectCard key={project._id} project={project} />
							))
						) : (
							<Loading />
						)}
					</Row>
				</>
			) : (
				<div>
					<p>
						Login or register to start tracking your projects and their bugs!
					</p>
					<Link to='/login'>
						<Button>Login</Button>
					</Link>
					<Link to='/register'>
						<Button>Register</Button>
					</Link>
				</div>
			)}
		</Container>
	);
}

export default AllProjectsPage;
