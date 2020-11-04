//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

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
				<Col className='col-padding one-element-col' lg={4} md={12}>
					<RecentBugsCard userBugs={userBugs} />
				</Col>
				<Col lg={8} md={12}>
					<Row className='first-row'>
						<Col>
							<Link
								to={`/projects/${
									userProjects[0] === undefined
										? ''
										: userProjects[0].title
								}`}
							>
								<RecentProjectCard
									recentProject={userProjects[0]}
								/>
							</Link>
						</Col>
					</Row>
					<Row>
						<Col className='one-element-col' lg={6} md={6}>
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
			{/* <Row>
                <Col md={4} xs={6}>
                    <a className='a-none' href='http://google.com' target='_blank'>
                        <AllProjectsCard />
                    </a>

                </Col>
                <Col md={4} xs={6}>
                    <a className='a-none' href='http://google.com' target='_blank'>
                        <AllBugsCard />
                    </a>

                </Col>
                <Col md={4} xs={12}>
                    <a className='a-none' href='http://google.com' target='_blank'>
                        <ViewAccountCard />
                    </a>

                </Col>
            </Row> */}
		</Container>
	);
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default Home;
