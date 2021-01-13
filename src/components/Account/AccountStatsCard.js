//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

//--- Components ---

//--- CSS ---

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function AccountStatsCard({
	stats: { projectCount, bugsFixedCount, completedProjectCount },
	bugs,
	projects,
}) {
	//--- JSX ---
	return (
		<Card className='rounded hover-parent full-width text-center'>
			<Card.Body>
				<Card.Title as='h2'>Statistics</Card.Title>
				<div className='divider'></div>
				<Row>
					<Col>
						<Card.Text>Project Count: {projectCount}</Card.Text>
						<Card.Text>Completed Projects: {completedProjectCount}</Card.Text>
					</Col>
					<Col>
						<Card.Text>Bugs Fixed: {bugsFixedCount}</Card.Text>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
}

export default AccountStatsCard;
