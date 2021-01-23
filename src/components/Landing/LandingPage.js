//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';
import { Link } from 'react-router-dom';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

//--- Components ---
import { ErrorMessage } from '../Messages';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function LandingPage({ currentError, setCurrentError }) {
	//--- JSX ---
	return (
		<Container id='landing' fluid>
			{currentError ? (
				<ErrorMessage
					currentError={currentError}
					setCurrentError={setCurrentError}
				/>
			) : null}
			<div>
				<h1>Welcome to BUG HUNT</h1>
				<p>
					Our platform is devoted to helping you track your projects and manage
					the dangerous threat of bugs.
				</p>
				<p>
					Join us and begin taking the fight to the bugs while bringing success
					and glory to your projects!
				</p>
				<Link to='/login'>
					<Button>Login</Button>
				</Link>
				<Link to='/register'>
					<Button>Register</Button>
				</Link>
				<div>
					<h2>TRACK and HUNT</h2>
					<p>
						When you sign up to our platform, you will become a ranked bug
						hunter. With this station, you will have the ability to start new
						projects, track bugs on projects, and, most importantly, squash any
						bugs you find.
					</p>
				</div>

				<div>
					<h2>REWARD</h2>
					<p>
						Our platform believes in compensation for the expedient and
						efficient slaying of bugs. As you complete projects and remove bugs
						you will gain points. The points you received are dependent on the
						priority level of the bug squashed. The higher the priority, the
						higher the reward.
					</p>
				</div>

				<div>
					<h2>PROGRESS</h2>
					<p>
						Earn enough points and you will be promoted in rank! At BUG HUNT
						there is always room for improvement and advancement!
					</p>
				</div>
			</div>
		</Container>
	);
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default LandingPage;
