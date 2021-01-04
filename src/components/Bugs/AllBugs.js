//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';
import { Link } from 'react-router-dom';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
				<>
					{userBugs.length === 0 ? (
						<>
							<Card.Text as='h3'>
								No bugs were found! Go to a project to start tracking your bugs!
							</Card.Text>
							<Link to='/projects'>
								<Button>My Projects</Button>
							</Link>
						</>
					) : (
						<Row>
							{userBugs !== undefined
								? userBugs.map((bug) => <BugCard bug={bug} />)
								: ''}
						</Row>
					)}
				</>
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
