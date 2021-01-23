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
import { LoginValidated, RegisterValidated } from './Authentication/index';
import { ErrorPage } from './ErrorPage/index';
import {
	AllProjectsPage,
	ProjectPage,
	ValidatedProjectForm,
} from './Projects/index';
import { AllBugs, Bug, ValidatedBugForm } from './Bugs/index';
import { Account, RankUp } from './Account/index';
import { LandingPage } from './Landing';
import { Loading } from './Loading';
import { ErrorMessage } from './Messages';

//--- CSS ---
import '../styles/body.css';
import '../styles/colors.css';
import '../styles/images.css';
import '../styles/typography.css';
import '../styles/cards.css';
import '../styles/animations.css';
import '../styles/forms.css';
import '../styles/messages.css';

//--- API ---
import { getUserById, getAllUserProjects, getAllUserBugs } from '../api/index';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
const App = () => {
	//--- State ---
	const [userProjects, setUserProjects] = useState([]);
	const [userBugs, setUserBugs] = useState([]);
	const [currentUser, setCurrentUser] = useState(null);
	const [currentError, setCurrentError] = useState(null);
	const [currentVerification, setCurrentVerification] = useState(null);
	const [loading, setLoading] = useState(true);

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
					setCurrentError(error.data);
				});
		}
		setTimeout(() => setLoading(false), 1000);
	}, []);

	//Get logged-in users projects and bugs.
	useEffect(() => {
		setLoading(true);
		if (currentUser != null) {
			getAllUserProjects(currentUser._id || localStorage.getItem('userId'))
				.then((response) => {
					setUserProjects(response.projects);
				})
				.catch((error) => {
					console.log(error);
					setCurrentError(error.data);
				});
			getAllUserBugs(currentUser._id || localStorage.getItem('userId'))
				.then((response) => {
					setUserBugs(response.bugs);
				})
				.catch((error) => {
					console.log(error);
					setCurrentError(error.data);
				});
		} else {
			setUserProjects([]);
			setUserBugs([]);
		}
		setTimeout(() => setLoading(false), 1000);
	}, [currentUser]);

	useEffect(() => {
		const timer = setTimeout(() => setCurrentVerification(false), 10000);
		return () => clearTimeout(timer);
	}, [currentVerification]);

	//--- Functions ---
	//--- JSX ---
	return (
		<>
			{loading === false ? (
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
											currentVerification={currentVerification}
											setCurrentVerification={setCurrentVerification}
										/>
									) : (
										<LandingPage
											currentError={currentError}
											setCurrentError={setCurrentError}
											currentVerification={currentVerification}
											setCurrentVerification={setCurrentVerification}
										/>
									)}
								</Route>
								<Route exact path='/login'>
									<LoginValidated
										setCurrentUser={setCurrentUser}
										setCurrentError={setCurrentError}
										currentError={currentError}
										setLoading={setLoading}
									/>
								</Route>
								<Route exact path='/register'>
									<RegisterValidated
										setCurrentError={setCurrentError}
										currentError={currentError}
										setLoading={setLoading}
									/>
								</Route>
								<Route exact path='/projects'>
									<AllProjectsPage
										userProjects={userProjects}
										currentUser={currentUser}
										currentVerification={currentVerification}
										setCurrentVerification={setCurrentVerification}
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
									path='/account/rankup'
									render={(props) => (
										<RankUp {...props} currentUser={currentUser} />
									)}
								></Route>
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
											currentVerification={currentVerification}
											setCurrentVerification={setCurrentVerification}
											setLoading={setLoading}
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
											currentVerification={currentVerification}
											setCurrentVerification={setCurrentVerification}
											currentUser={currentUser}
											setCurrentUser={setCurrentUser}
											setLoading={setLoading}
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
										setCurrentVerification={setCurrentVerification}
										setLoading={setLoading}
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
											currentVerification={currentVerification}
											setCurrentVerification={setCurrentVerification}
											setLoading={setLoading}
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
			) : (
				<Loading />
			)}
		</>
	);
};

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default App;
