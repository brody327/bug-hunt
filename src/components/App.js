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
import {
	Login,
	Register,
	LoginValidated,
	RegisterValidated,
} from './Authentication/index';
import { ErrorPage } from './ErrorPage/index';
import {
	AllProjectsPage,
	ProjectPage,
	ValidatedProjectForm,
} from './Projects/index';
import { AllBugs, Bug, ValidatedBugForm } from './Bugs/index';
import { Account } from './Account/index';
import { LandingPage } from './Landing';

//--- CSS ---
import '../styles/body.css';
import '../styles/colors.css';
import '../styles/images.css';
import '../styles/typography.css';
import '../styles/cards.css';
import '../styles/animations.css';
import '../styles/forms.css';

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
	const [currentError, setCurrentError] = useState(null);

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
							<LoginValidated
								setCurrentUser={setCurrentUser}
								setCurrentError={setCurrentError}
								currentError={currentError}
							/>
						</Route>
						<Route exact path='/register'>
							<RegisterValidated
								setCurrentError={setCurrentError}
								currentError={currentError}
							/>
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
								<ValidatedBugForm
									{...props}
									setUserProjects={setUserProjects}
									userProjects={userProjects}
									userBugs={userBugs}
									setUserBugs={setUserBugs}
									currentUser={currentUser}
									currentError={currentError}
									setCurrentError={setCurrentError}
								/>
							)}
						></Route>
						<Route
							exact
							path='/bugs/:bug'
							render={(props) => (
								<Bug
									{...props}
									setUserProjects={setUserProjects}
									userProjects={userProjects}
									userBugs={userBugs}
									setUserBugs={setUserBugs}
									currentError={currentError}
									setCurrentError={setCurrentError}
									currentUser={currentUser}
									setCurrentUser={setCurrentUser}
								/>
							)}
						></Route>
						<Route exact path='/projects/new'>
							<ValidatedProjectForm
								userProjects={userProjects}
								setUserProjects={setUserProjects}
								currentUser={currentUser}
								currentError={currentError}
								setCurrentError={setCurrentError}
							/>
						</Route>
						<Route
							exact
							path='/projects/:project'
							render={(props) => (
								<ProjectPage
									{...props}
									setUserProjects={setUserProjects}
									userProjects={userProjects}
									userBugs={userBugs}
									setUserBugs={setUserBugs}
									currentError={currentError}
									setCurrentError={setCurrentError}
								/>
							)}
						></Route>
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
