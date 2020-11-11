//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Card from 'react-bootstrap/Card';

//--- Components ---

//--- CSS ---
import '../../styles/hover-card.css';

//--- Media ---

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function RecentProjectCard({ recentProject }) {
	//--- JSX ---
	return (
		<Card className='project-card card-corner-color-primary rounded hover-parent background-secondary '>
			<Card.Body>
				<Card.Title as='h2'>Most Recent Project:</Card.Title>
				<Card.Subtitle as='h3'>
					{recentProject === undefined
						? 'No Recent Project Found!'
						: `${recentProject.title}`}
				</Card.Subtitle>
				<Card.Text className='hover-child fade-in-full' as='h4'>
					{recentProject === undefined
						? ''
						: `Last Updated: ${recentProject.lastUpdated}`}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default RecentProjectCard;
