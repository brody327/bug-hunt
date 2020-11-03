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
	//--- Effects ---
	//--- Functions ---
	//--- JSX ---
	return (
		<Router>
			<Container fluid id='app'>
				<Header />
				<Container id='content' fluid>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/login'>
							<Login />
						</Route>
						<Route exact path='/register'>
							<Register />
						</Route>
						<Route exact path='/all-projects'>
							<AllProjectsPage />
						</Route>
						<Route exact path='/all-bugs'>
							<AllBugs />
						</Route>
						<Route exact path='/account'>
							<Account />
						</Route>
						<Route exact path='/bugs/:bug' component={Bug}>
							{/* <Bug /> */}
						</Route>
						<Route
							exact
							path='/projects/:project'
							component={ProjectPage}
						>
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
