//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';
import { Link } from 'react-router-dom';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

//--- Media ---
import image from '../../images/placeholder-card-img.jpg';
import account from '../../images/account.png';
import mainpage from '../../images/mainpage.png';
import rankup from '../../images/rankup.png';

//--- Components ---
import { ErrorMessage } from '../Messages';

//--- CSS ---
import '../../styles/components/LandingPage.css';

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
				<div className='text-center'>
					<h1>Welcome to BUG HUNT</h1>
				</div>
				<div className='divider'></div>
				<Row className='text-center'>
					<Col>
						<p>
							Our platform is devoted to helping you track your projects and
							manage the dangerous threat of bugs.
						</p>
						<p>
							Join us and begin taking the fight to the bugs while bringing
							success and glory to your projects!
						</p>
						<div className='button-container'>
							<Link to='/login'>
								<Button>Login</Button>
							</Link>
							<Link to='/register'>
								<Button>Register</Button>
							</Link>
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<h2>TRACK and HUNT</h2>
						<div className='divider'></div>
					</Col>
				</Row>
				<Row>
					<Col className='text-center'>
						<Image className='landing-image' src={mainpage} fluid />
					</Col>
					<Col>
						<p>
							When you sign up to our platform, you will become a ranked bug
							hunter. With this station, you will have the ability to start new
							projects, track bugs on projects, and, most importantly, squash
							any bugs you find.
						</p>
					</Col>
				</Row>
				<Row>
					<Col className='text-right'>
						<h2>REWARD</h2>
						<div className='divider'></div>
					</Col>
				</Row>
				<Row>
					<Col>
						<p>
							Our platform believes in compensation for the expedient and
							efficient slaying of bugs. As you complete projects and remove
							bugs you will gain points. The points you received are dependent
							on the priority level of the bug squashed. The higher the
							priority, the higher the reward.
						</p>
					</Col>
					<Col className='text-center'>
						<Image className='landing-image' src={account} fluid />
					</Col>
				</Row>
				<Row>
					<Col>
						<h2>PROGRESS</h2>
						<div className='divider'></div>
					</Col>
				</Row>
				<Row>
					<Col className='text-center'>
						<Image className='landing-image' src={rankup} fluid />
					</Col>
					<Col>
						<p>
							Earn enough points and you will be promoted in rank! At BUG HUNT
							there is always room for improvement and advancement!
						</p>
					</Col>
				</Row>
			</div>
		</Container>
	);
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default LandingPage;
