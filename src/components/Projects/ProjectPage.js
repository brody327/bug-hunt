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

//--- CSS ---

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function ProjectPage({ match, location }) {
	//--- JSX ---
	const project = location.state.project;
	return (
		<Container fluid>
			<h1>{project.title}</h1>
			<Row>
				<Col>
					<Card>
						<p>Project Info</p>
						<p>ID: {project._id}</p>
						<p>Project Creator: {project.creator}</p>
						<p>Project Created: {project.createdAt}</p>
					</Card>
					<div className='text-center'>
						<Button>Delete Project</Button>
						<Button>Complete Project</Button>
					</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<Card>
						<p>Project Contributors</p>
						<div>
							{project.contributors.map((contributor) => (
								<Card.Text>{contributor}</Card.Text>
							))}
						</div>
					</Card>
				</Col>
				<Col>
					<Card>
						<p>Project Stats</p>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col>
					<Card>
						<p>Project Bugs</p>
						<div>
							<Link to={{ pathname: '/bugs/new', state: { project } }}>
								<Button>Create Bug</Button>
							</Link>
						</div>
						<div></div>
						<p>{project.bugs}</p>
						<Button>Delete Bug</Button>
					</Card>
				</Col>
			</Row>
			<Row></Row>
		</Container>
	);
}

export default ProjectPage;
