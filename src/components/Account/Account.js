//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';
import { Link } from 'react-router-dom';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

//--- Components ---
import {
	AccountInfoCard,
	EditAccountCard,
	RankCard,
	ScoreCard,
	AccountStatsCard,
} from './index';

//--- CSS ---
import '../../styles/components/Account.css';
import '../../styles/card-hover-effects.css';
import '../../styles/hover-card.css';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function Account({ currentUser }) {
	//--- JSX ---
	return currentUser === null ? (
		<div>
			<p>Log in or sign up to start viewing your account details!</p>
			<Link to='/login'>
				<Button>Login</Button>
			</Link>
			<Link to='/register'>
				<Button>Register</Button>
			</Link>
		</div>
	) : (
		<Container id='account-container' fluid>
			<h1 className='text-center'>My Account</h1>
			<Row>
				<Col lg={6} md={12}>
					<Row id='account-info-container' className='full-width '>
						<AccountInfoCard
							username={currentUser.username}
							email={currentUser.email}
							company={currentUser.company}
						/>
					</Row>
					<Row id='edit-account-contianer' className='full-width '>
						<EditAccountCard />
					</Row>
				</Col>
				<Col lg={6} md={12}>
					<Row className='full-width '>
						<RankCard rank={currentUser.game.rank} />
					</Row>
					<Row className='full-width '>
						<ScoreCard score={currentUser.game.score} />
					</Row>
					<Row className='full-width '>
						<AccountStatsCard
							stats={currentUser.stats}
							bugs={currentUser.bugs}
							projects={currentUser.projects}
						/>
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

export default Account;
