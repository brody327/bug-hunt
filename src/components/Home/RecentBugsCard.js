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

//--- Media ---

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function RecentBugsCard({ userBugs }) {
	//--- JSX ---
	return (
		<Card className='card card-corner-color-primary recent-bugs-card  hover-parent rounded background-secondary'>
			<Card.Body>
				<Card.Title as='h2'>Recent Bugs</Card.Title>
				<Card.Text as='h4'>
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
			</Card.Body>
		</Card>
	);
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default RecentBugsCard;
