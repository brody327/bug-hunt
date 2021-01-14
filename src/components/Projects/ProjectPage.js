//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//--- Components ---

//--- CSS ---
import '../../styles/components/ProjectPage.css';

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
						<h2>Project Info</h2>
						<p>ID: {project._id}</p>
						<p>Project Creator: {project.creator.username}</p>
						<p>
							Project Created At:
							{moment(project.createdAt).format(' HH:mm MM-DD-YYYY')}
						</p>
						<p>
							Project Last Updated At:
							{moment(project.updatedAt).format(' HH:mm MM-DD-YYYY')}
						</p>
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
						<h2>Project Contributors</h2>
						<div>
							{project.contributors.map((contributor) => (
								<Card.Text key={contributor._id}>
									{contributor.username}
									{project.contributors.length > 1 ? ', ' : ''}
								</Card.Text>
							))}
						</div>
					</Card>
				</Col>
				<Col>
					<Card>
						<h2>Project Stats</h2>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col>
					<Card>
						<h2>Project Bugs</h2>
						<div>
							<Link to={{ pathname: '/bugs/new', state: { project } }}>
								<Button>Create Bug</Button>
							</Link>
						</div>
						<div className='bugs-list'>
							{project.bugs.map((bug) => (
								<Container>
									<Row>
										<Link
											to={{
												pathname: `/bugs/${bug._id}`,
												state: { bug, project },
											}}
											key={bug._id}
										>
											<Card.Text>{bug.name}</Card.Text>
										</Link>
										<Button>Delete Bug</Button>
									</Row>
								</Container>
							))}
						</div>
					</Card>
				</Col>
			</Row>
			<Row></Row>
		</Container>
	);
}

export default ProjectPage;
