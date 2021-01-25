//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

//--- Bootstrap ---
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
		<Col className='col' lg={4} md={6} sm={12} xs={12}>
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
						<Card.Subtitle as='h4'>
							Last Updated:{' '}
							{moment(bug.lastUpdated).format('HH:mm, MM-DD-YYYY')}
						</Card.Subtitle>
						<Card.Text className='hover-child fade-in-full'>
							Created By: {bug.creator.username}
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
