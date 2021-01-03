//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';
import { Link } from 'react-router-dom';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

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
					<Link to='/login'>
						<Button>Login</Button>
					</Link>
					<Link to='/register'>
						<Button>Register</Button>
					</Link>
				</div>
			)}
		</Container>
	);
}

export default AllBugs;
