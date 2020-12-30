//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';
import { Link } from 'react-router-dom';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//--- Components ---
import {
	RecentProjectCard,
	RecentBugsCard,
	AllProjectsCard,
	AllBugsCard,
	ViewAccountCard,
} from './index';

//--- CSS ---
import '../../styles/components/Home.css';
import '../../styles/card-hover-effects.css';
import '../../styles/hover-card.css';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function Home({ userProjects, userBugs, currentUser, appStatus }) {
	//--- State ---
	//--- Effects ---
	//--- Functions ---
	//--- JSX ---
	return (
		<Container id='home' fluid>
			<Row>
				<Col
					id='recent-bugs-card-container'
					className='col-padding one-element-col responsive-padding-correction'
					xl={4}
					lg={6}
					md={12}
				>
					<RecentBugsCard userBugs={userBugs} />
				</Col>
				<Col xl={8} lg={6} md={12}>
					<Row className='first-row'>
						<Col>
							<Link
								to={{
									pathname: `/projects/${
										userProjects[0] === undefined ? '' : userProjects[0]._id
									}`,
									state: { project: userProjects[0] },
								}}
							>
								<RecentProjectCard recentProject={userProjects[0]} />
							</Link>
						</Col>
					</Row>
					<Row>
						<Col lg={6} md={6} className='responsive-padding-correction'>
							<Link to='projects'>
								<AllProjectsCard />
							</Link>
						</Col>
						<Col lg={6} md={6}>
							<Link to='bugs'>
								<AllBugsCard />
							</Link>
						</Col>
					</Row>
					<Row className='last-row'>
						<Col lg={12} md={12}>
							<Link to='/account'>
								<ViewAccountCard />
							</Link>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default Home;
