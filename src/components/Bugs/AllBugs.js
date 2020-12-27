//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

//--- Components ---
import { BugCard } from './index';

//--- CSS ---

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function AllBugs({ userBugs, currentUser }) {
	//--- JSX ---
	return (
		<Container fluid>
			{currentUser !== null ? (
				<Row>
					{userBugs !== undefined
						? userBugs.map((bug) => <BugCard bug={bug} />)
						: ''}
				</Row>
			) : (
				<div>
					<p>
						Login or register to start tracking your projects and their bugs!
					</p>
					<p>register button</p>
					<p>login button</p>
				</div>
			)}
		</Container>
	);
}

export default AllBugs;
