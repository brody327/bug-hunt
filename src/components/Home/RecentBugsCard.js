//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

//--- Components ---

//--- CSS ---
import '../../styles/hover-card.css';

//--- Media ---
import placeholder from '../../images/placeholder-card-img.jpg';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function RecentBugsCard({ userBugs }) {
	useEffect(() => {
		if (userBugs === undefined) {
			return;
		}
		console.log(userBugs);
	}, [userBugs]);
	//--- JSX ---
	return (
		<Card className='recent-bugs-card rounded hover-parent background-primary '>
			<Card.Img
				className='hover-child fade-in-half img-fade-half'
				src={placeholder}
				alt='Card image'
			/>
			<Card.Body>
				<Card.ImgOverlay>
					<Card.Title as='h2'>Recent Bugs</Card.Title>
					<Card.Text className='hover-child fade-in-full' as='h4'>
						View recent bugs from all your projects.
					</Card.Text>
					<Table>
						<thead>
							<tr>
								<th>Date</th>
								<th>Project</th>
								<th>Bug</th>
								<th>Severity</th>
							</tr>
						</thead>
						<tbody>
							{userBugs.map((bug) => (
								<tr key={bug._id}>
									<td>{bug.lastUpdated}</td>
									<td>
										<Link
											to={{
												pathname: `/projects/${bug.project_id}`,
												state: {
													projectId: bug.project_id,
												},
											}}
										>
											{bug.project_id}
										</Link>
									</td>
									<td>
										<Link
											to={{
												pathname: `/bugs/${bug.title}`,
												state: {
													bug: bug,
												},
											}}
										>
											{bug.title}
										</Link>
									</td>
									<td>{bug.priority}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Card.ImgOverlay>
			</Card.Body>
		</Card>
	);
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default RecentBugsCard;
