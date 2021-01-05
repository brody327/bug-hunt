//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
//testing heroku changesw
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
import { AllProjectsPage, NewProjectForm, ProjectPage } from './Projects/index';
import { AllBugs, Bug, NewBugForm } from './Bugs/index';
import { Account } from './Account/index';
import { LandingPage } from './Landing';

//--- CSS ---
import '../styles/body.css';
import '../styles/colors.css';
import '../styles/images.css';
import '../styles/typography.css';
import '../styles/cards.css';
import '../styles/animations.css';

//--- API ---
import { getUserById, getAllUserProjects, getAllUserBugs } from '../api/index';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
const App = () => {
	//--- State ---
	const [appStatus, setAppStatus] = useState('testing');
	const [userProjects, setUserProjects] = useState([]);
	const [userBugs, setUserBugs] = useState([]);
	const [currentUser, setCurrentUser] = useState(null);

	//--- Effects ---
	//Check for persistent logged-in user.
	useEffect(() => {
		const id = localStorage.getItem('userId');
		if (id !== null) {
			getUserById(id)
				.then((response) => {
					setCurrentUser(response.user);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, []);

	//Get logged-in users projects and bugs.
	useEffect(() => {
		if (currentUser != null) {
			getAllUserProjects(currentUser._id || localStorage.getItem('userId'))
				.then((response) => {
					setUserProjects(response.projects);
				})
				.catch((error) => {
					console.log(error);
				});
			getAllUserBugs(currentUser._id || localStorage.getItem('userId'))
				.then((response) => {
					setUserBugs(response.bugs);
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			setUserProjects([]);
			setUserBugs([]);
		}
	}, [currentUser]);

	//--- Functions ---
	//Sorts bugs in array by most recently updated.
	//TODO: Should be done on back end call!
	userBugs.sort((a, b) => {
		return new Date(b.lastUpdated) - new Date(a.lastUpdated);
	});
	//--- JSX ---
	return (
		<Router>
			<Container fluid id='app'>
				<Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
				<Container id='content' fluid>
					<Switch>
						<Route exact path='/'>
							{currentUser !== null ? (
								<Home
									userProjects={userProjects}
									userBugs={userBugs}
									currentUser={currentUser}
									appStatus={appStatus}
								/>
							) : (
								<LandingPage />
							)}
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
							<AllProjectsPage
								userProjects={userProjects}
								currentUser={currentUser}
							/>
						</Route>
						<Route exact path='/bugs'>
							<AllBugs userBugs={userBugs} currentUser={currentUser} />
						</Route>
						<Route exact path='/account'>
							<Account currentUser={currentUser} />
						</Route>
						<Route
							exact
							path='/bugs/new'
							render={(props) => (
								<NewBugForm
									{...props}
									setUserProjects={setUserProjects}
									userProjects={userProjects}
									userBugs={userBugs}
									setUserBugs={setUserBugs}
									currentUser={currentUser}
								/>
							)}
						></Route>
						<Route exact path='/bugs/:bug' component={Bug}>
							{/* <Bug /> */}
						</Route>
						<Route exact path='/projects/new'>
							<NewProjectForm
								userProjects={userProjects}
								setUserProjects={setUserProjects}
								currentUser={currentUser}
							/>
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
