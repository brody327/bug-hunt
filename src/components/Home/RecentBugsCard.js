//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

//--- Bootstrap ---
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

//--- Components ---

//--- CSS ---

//--- Media ---

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function RecentBugsCard({ userBugs, userProjects, currentUser }) {
	//--- JSX ---
	//Gets
	const getRecentBugProjectName = (bug) => {
		const project = userProjects.filter(
			(project) => project._id === bug.project_id
		)[0];

		if (project) {
			return project.title;
		}
	};

	return (
		<Card
			id='recent-bugs-card'
			className='card card-corner-color-primary hover-parent rounded background-secondary'
		>
			<Card.Body>
				<Card.Title as='h2'>Recent Bugs</Card.Title>
				<Card.Text as='h4'>View recent bugs from all your projects.</Card.Text>
				{userBugs.length === 0 ? (
					<div>
						<Card.Text as='h5'>
							No bugs were found! Go to a project to start tracking your bugs!
						</Card.Text>
						<Link to='/projects'>
							<Card.Link>Go to My Projects</Card.Link>
							{/* <Button>My Projects</Button> */}
						</Link>
					</div>
				) : (
					<Table id='recent-bugs-table'>
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
									<td>{moment(bug.updatedAt).format('HH:mm MM-DD-YYYY')}</td>
									<td>
										<Link
											to={{
												pathname: `/projects/${bug.project_id}`,
												state: {
													project: userProjects.filter(
														(project) => project._id === bug.project_id
													)[0],
												},
											}}
										>
											{getRecentBugProjectName(bug)}
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
				)}
			</Card.Body>
		</Card>
	);
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default RecentBugsCard;
