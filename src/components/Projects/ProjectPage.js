//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';
import { Link } from 'react-router-dom';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
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
			<p>Project Info</p>
			<p>ID: {project._id}</p>
			<p>Project Creator: {project.creator}</p>
			<Button>Delete Project</Button>
			<Button>Complete Project</Button>
			<p>Project Contributors</p>
			<p>{project.contributors}</p>
			<p>Project Stats</p>
			<p>Project Bugs</p>
			<p>{project.bugs}</p>
			<Button>Delete Bug</Button>
			<Link to={{ pathname: '/bugs/new', state: { project } }}>
				<Button>Create Bug</Button>
			</Link>
		</Container>
	);
}

export default ProjectPage;
