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
function Home() {
	let history = useHistory();
	//--- State ---
	const [appStatus, setAppStatus] = useState('testing');
	const [userProjects, setUserProjects] = useState([]);
	const [userBugs, setUserBugs] = useState([]);
	const [currentUser, setCurrentUser] = useState({});

	//--- Effects ---
	//Sets default test data.
	useEffect(() => {
		setCurrentUser({
			_id: 1,
			username: 'Brody555',
			age: '25',
			email: 'brody@email.com',
			game: { score: 5000, rank: 'Associate' },
		});
		setUserProjects([
			{
				_id: 2,
				title: 'My Second Project',
				creator: 'Brody555',
				contributors: ['Brody555', 'AndyCandy', 'Kazama', 'JoeShmoe'],
				createdAt: '11/2/2020',
				lastUpdated: '11/2/2020',
				description:
					"This is my second project that I'm making with my friends!",
				bugs: [1],
			},
			{
				_id: 1,
				title: 'My First Project',
				creator: 'Brody555',
				contributors: ['Brody555', 'AndyCandy', 'Kazama', 'JoeShmoe'],
				createdAt: '10/30/2020',
				lastUpdated: '10/31/2020',
				description:
					"This is my first project that I'm making with my friends!",
				//These will be references to bugs below.
				bugs: [1, 2],
			},
		]);
		setUserBugs([
			{
				_id: 1,
				project_id: 1,
				title: 'Bug 001',
				creator: 'Brody555',
				asignee: 'Brody555',
				createdAt: '10/30/2020',
				lastUpdated: '10/30/2020',
				description: 'This is a severe bug!',
				priority: 'Severe',
				comments: [
					{
						_id: 1,
						content: 'I think this may help...',
						creator: 'AndyCandy',
						createdAt: '10/31/2020',
						lastUpdated: null,
					},
					{
						_id: 2,
						content: "You're right! I'll fix it today!",
						creator: 'Brody555',
						createdAt: '11/1/2020',
						lastUpdated: '11/1/2020',
					},
				],
			},
			{
				_id: 2,
				project_id: 2,
				title: 'Bug 002',
				creator: 'Brody555',
				asignee: 'Brody555',
				createdAt: '10/29/2020',
				lastUpdated: '10/29/2020',
				description: 'This is a severe bug!',
				priority: 'Severe',
				comments: [
					{
						_id: 1,
						content: 'I think this may help...',
						creator: 'AndyCandy',
						createdAt: '10/31/2020',
						lastUpdated: null,
					},
					{
						_id: 2,
						content: "You're right! I'll fix it today!",
						creator: 'Brody555',
						createdAt: '11/1/2020',
						lastUpdated: '11/1/2020',
					},
				],
			},
		]);
	}, [appStatus]);
	//--- Functions ---
	//Sorts projects in array by most recently updated.
	//TODO: Should be done on back end call!
	userProjects.sort((a, b) => {
		return new Date(b.lastUpdated) - new Date(a.lastUpdated);
	});

	//Sorts bugs in array by most recently updated.
	//TODO: Should be done on back end call!
	userBugs.sort((a, b) => {
		return new Date(b.lastUpdated) - new Date(a.lastUpdated);
	});
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
							<Link to='all-projects'>
								<AllProjectsCard />
							</Link>
						</Col>
						<Col lg={6} md={6}>
							<Link to='all-bugs'>
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
