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
import placeholder from '../../images/placeholder-card-img.jpg';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function RecentProjectCard({ recentProject }) {
	//--- JSX ---
	return (
		<Card className='project-card rounded hover-parent background-secondary '>
			<Card.Img
				className='hover-child fade-in-half img-fade-half'
				src={placeholder}
				alt='Card image'
			/>
			<Card.Body>
				<Card.ImgOverlay>
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
				</Card.ImgOverlay>
			</Card.Body>
		</Card>
	);
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default RecentProjectCard;
