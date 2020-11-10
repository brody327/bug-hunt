//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

//--- Components ---

//--- CSS ---
import '../../styles/hover-card.css';

//--- Media ---

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function AllProjectsCard() {
	//--- JSX ---
	return (
		<Card className='project-card card-corner-color-primary rounded hover-parent background-secondary '>
			<Card.Body>
				<Card.Title as='h2'>All Projects</Card.Title>
				<Card.Text className='hover-child fade-in-full' as='h4'>
					View all your projects.
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default AllProjectsCard;
