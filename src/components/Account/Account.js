//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
		'LOADING'
	) : (
		<Container id='account-container' fluid>
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
