//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';
import Container from 'react-bootstrap/Container';

//--- Bootstrap ---
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//--- Components ---
import { RecentProjectCard } from '../Home/index';
import { ProjectCard } from './index';

//--- CSS ---
import '../../styles/components/AllProjectsPage.css';
//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function AllProjectsPage({ userProjects }) {
	//--- JSX ---
	return (
		<Container fluid>
			<Row id='project-cards-container'>
				{userProjects !== undefined
					? userProjects.map((project) => (
							<ProjectCard project={project} />
					  ))
					: ''}
			</Row>
		</Container>
	);
}

export default AllProjectsPage;
