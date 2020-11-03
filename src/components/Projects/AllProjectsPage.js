//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//--- Bootstrap ---

//--- Components ---
import { RecentProjectCard } from '../Home/index';
import { ProjectCard } from './index';

//--- CSS ---

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function AllProjectsPage() {
	//--- JSX ---
	return (
		<Container>
			<Row>
				<Col>
					<ProjectCard />
				</Col>
				<Col>
					<Row>
						<RecentProjectCard />
					</Row>
					<Row></Row>
				</Col>
			</Row>
		</Container>
	);
}

export default AllProjectsPage;
