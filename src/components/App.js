//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';

//--- Components ---
import { Header } from './Header/index';
import { Footer } from './Footer/index';
import { Home } from './Home/index';
import { Login, Register } from './Authentication/index';
import { ErrorPage } from './ErrorPage/index';
import { AllProjectsPage, ProjectPage } from './Projects/index';
import { AllBugs, Bug } from './Bugs/index';
import { Account } from './Account/index';

//--- CSS ---
import '../styles/body.css';
import '../styles/colors.css';
import '../styles/images.css';
import '../styles/typography.css';
import '../styles/cards.css';
import '../styles/animations.css';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
const App = () => {
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
			email: 'brody@email.com',
			company: 'TekCompany',
			game: { score: 5000, rank: 'Associate' },
			stats: {
				projectCount: 3,
				bugsFixedCount: 10,
				completedProjectCount: 2,
			},
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
			{
				_id: 3,
				title: 'My Third Project',
				creator: 'Brody555',
				contributors: ['Brody555', 'AndyCandy', 'Kazama', 'JoeShmoe'],
				createdAt: '10/30/2020',
				lastUpdated: '11/3/2020',
				description:
					"This is my first project that I'm making with my friends!",
				//These will be references to bugs below.
				bugs: [1, 2],
			},
			{
				_id: 3,
				title: 'My Fourth Project',
				creator: 'Brody555',
				contributors: ['Brody555', 'AndyCandy', 'Kazama', 'JoeShmoe'],
				createdAt: '10/30/2020',
				lastUpdated: '11/4/2020',
				description:
					"This is my first project that I'm making with my friends!",
				//These will be references to bugs below.
				bugs: [1, 2],
			},
			{
				_id: 3,
				title: 'My Fifth Project',
				creator: 'Brody555',
				contributors: ['Brody555', 'AndyCandy', 'Kazama', 'JoeShmoe'],
				createdAt: '10/30/2020',
				lastUpdated: '11/5/2020',
				description:
					"This is my first project that I'm making with my friends!",
				//These will be references to bugs below.
				bugs: [1, 2],
			},
			{
				_id: 3,
				title: 'My Sixth Project',
				creator: 'Brody555',
				contributors: ['Brody555', 'AndyCandy', 'Kazama', 'JoeShmoe'],
				createdAt: '10/30/2020',
				lastUpdated: '11/6/2020',
				description:
					"This is my first project that I'm making with my friends!",
				//These will be references to bugs below.
				bugs: [1, 2],
			},
			{
				_id: 3,
				title: 'My Zero Project',
				creator: 'Brody555',
				contributors: ['Brody555', 'AndyCandy', 'Kazama', 'JoeShmoe'],
				createdAt: '10/30/2020',
				lastUpdated: '11/7/2020',
				description:
					"This is my first project that I'm making with my friends!",
				//These will be references to bugs below.
				bugs: [1, 2],
			},

			//TODO: Add projects where user is contributor AND creator to userProjects
		]);
		setUserBugs([
			{
				_id: 1,
				project_id: 1,
				title: 'Bug 001',
				creator: 'Brody555',
				assignee: 'Brody555',
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
				assignee: 'Brody555',
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
			{
				_id: 3,
				project_id: 2,
				title: 'Bug 003',
				creator: 'Brody555',
				assignee: 'Brody555',
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
			{
				_id: 3,
				project_id: 2,
				title: 'Bug 003',
				creator: 'Brody555',
				assignee: 'Brody555',
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
			{
				_id: 3,
				project_id: 2,
				title: 'Bug 003',
				creator: 'Brody555',
				assignee: 'Brody555',
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
			{
				_id: 3,
				project_id: 2,
				title: 'Bug 003',
				creator: 'Brody555',
				assignee: 'Brody555',
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
			{
				_id: 3,
				project_id: 2,
				title: 'Bug 003',
				creator: 'Brody555',
				assignee: 'Brody555',
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
			{
				_id: 3,
				project_id: 2,
				title: 'Bug 003',
				creator: 'Brody555',
				assignee: 'Brody555',
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
			{
				_id: 3,
				project_id: 2,
				title: 'Bug 003',
				creator: 'Brody555',
				assignee: 'Brody555',
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

			//TODO: Add bugs where user is creator AND assignee to userBugs
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
		<Router>
			<Container fluid id='app'>
				<Header />
				<Container id='content' fluid>
					<Switch>
						<Route exact path='/'>
							<Home
								userProjects={userProjects}
								userBugs={userBugs}
								currentUser={currentUser}
								appStatus={appStatus}
							/>
						</Route>
						<Route exact path='/login'>
							<Login
								currentUser={currentUser}
								setCurrentUser={setCurrentUser}
							/>
						</Route>
						<Route exact path='/register'>
							<Register />
						</Route>
						<Route exact path='/projects'>
							<AllProjectsPage userProjects={userProjects} />
						</Route>
						<Route exact path='/bugs'>
							<AllBugs userBugs={userBugs} />
						</Route>
						<Route exact path='/account'>
							<Account currentUser={currentUser} />
						</Route>
						<Route exact path='/bugs/:bug' component={Bug}>
							{/* <Bug /> */}
						</Route>
						<Route exact path='/projects/:project' component={ProjectPage}>
							{/* <ProjectPage /> */}
						</Route>
						<Route path='*'>
							<ErrorPage />
						</Route>
					</Switch>
				</Container>
				<Footer />
			</Container>
		</Router>
	);
};

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default App;
