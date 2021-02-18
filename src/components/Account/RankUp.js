//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';
import { useHistory } from 'react-router-dom';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

//--- Components ---

//--- CSS ---

//--- API ---

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function RankUp({ currentUser, match, location }) {
	const history = useHistory();
	const project = location.state.project;
	return (
		<Container fluid className='text-center'>
			<h1>Rank Up!</h1>
			<Row>
				<Col className='text-center'>
					<h2>You have been promoted to the rank {currentUser.game.rank}!</h2>
					<h3>Congratulations, {currentUser.username}.</h3>
					<div className='button-container'>
						<Button
							onClick={() =>
								history.push({
									pathname: `/projects/${project._id}`,
									state: { project: project },
								})
							}
						>
							Go to project
						</Button>
						<Button onClick={() => history.push('/account')}>
							Go to Account
						</Button>
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default RankUp;
