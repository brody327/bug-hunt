//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';

//--- Components ---
import { Header } from './Header/index';
import { Footer } from './Footer/index';
import { Home } from './Home/index';
import { Login, Register } from './Authentication/index';
import { ErrorPage } from './ErrorPage/index';
import { AllProjects, RecentProject } from './Projects/index';
import { AllBugs } from './Bugs/index';
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
	//--- JSX ---
	return (
		<Router>
			<Container fluid id='app'>
				<Header />
				<Container id='content' fluid>
					<Switch>
						<Route exact path='/home'>
							<Home />
						</Route>
						<Route exact path='/login'>
							<Login />
						</Route>
						<Route exact path='/register'>
							<Register />
						</Route>
						<Route exact path='/recent-project'>
							<RecentProject />
						</Route>
						<Route exact path='/all-projects'>
							<AllProjects />
						</Route>
						<Route exact path='/all-bugs'>
							<AllBugs />
						</Route>
						<Route exact path='/account'>
							<Account />
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
