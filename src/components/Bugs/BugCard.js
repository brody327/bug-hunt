//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';
import { Link } from 'react-router-dom';

//--- Bootstrap ---
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
//--- Components ---

//--- CSS ---

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function BugCard({ bug }) {
	//--- JSX ---
	return (
		<Col className='col' xl={4}>
			<Link
				to={{
					pathname: `/bugs/${bug.title}`,
					state: {
						bug: bug,
					},
				}}
			>
				<Card className='card project-card rounded hover-parent background-secondary card-corner-color-primary'>
					<Card.Body>
						<Card.Title as='h2'>{bug.title}</Card.Title>
						<Card.Subtitle as='h4'>{bug.lastUpdated}</Card.Subtitle>
						<Card.Text className='hover-child fade-in-full'>
							Created By: {bug.creator}
						</Card.Text>
						<Card.Text className='hover-child fade-in-full'>
							Assignee: {bug.assignee}
						</Card.Text>
					</Card.Body>
				</Card>
			</Link>
		</Col>
	);
}

export default BugCard;
