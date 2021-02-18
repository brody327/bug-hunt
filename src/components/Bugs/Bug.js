//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import moment from 'moment';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

//--- Components ---
import { ErrorMessage, VerificationMessage } from '../Messages';

//--- CSS ---
import '../../styles/components/Bug.css';

//--- API ---
import {
	getBugById,
	getProjectById,
	deleteBug,
	completeBug,
	getRank,
	getBugReward,
} from '../../api/index';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function Bug({
	userProjects,
	setUserProjects,
	userBugs,
	setUserBugs,
	currentError,
	setCurrentError,
	currentVerification,
	setCurrentVerification,
	currentUser,
	setCurrentUser,
	setLoading,
	match,
	location,
}) {
	//--- State ---
	const [bug, setBug] = useState(null);
	const [project, setProject] = useState(null);

	const bugData = location.state.bug;

	const history = useHistory();

	//--- Effects ---
	//Set bug to location bug.
	useEffect(() => {
		let mounted = true;
		if (!bug) {
			getBugById(bugData._id)
				.then((response) => {
					if (mounted) {
						setBug(response.bug);
						setProject(response.bug.project);
					}
				})
				.catch((error) => {
					console.log(error);
				});
		}
		setLoading(false);
		return () => {
			mounted = false;
		};
	}, []);

	//--- Functions ---
	const onDelete = async (bugId, projectId) => {
		try {
			setLoading(true);
			const deletedBug = await deleteBug(bugId, projectId);

			//Remove bug from userBugs and update.
			const bugIndex = userBugs.findIndex((userBug) => bug._id === userBug._id);
			userBugs.splice(bugIndex, 1);
			setUserBugs([...userBugs]);

			//Remove bug from project bugs.
			const projectIndex = userProjects.findIndex(
				(userProject) => bug.project._id === userProject._id
			);
			userProjects.splice(projectIndex, 1);
			setUserProjects([...userProjects, deletedBug.project]);

			//Go to project page.
			history.push({
				pathname: `/projects/${projectId}`,
				state: { project: deletedBug.project },
			});

			//Show verification message
			setCurrentVerification(deletedBug.message);
		} catch (err) {
			console.error(err);
			setCurrentError(err);
		}
		setTimeout(() => setLoading(false), 1000);
	};

	const onComplete = async (bugId, projectId, userId) => {
		const reward = getBugReward(bug.priority);
		const updatedRank = getRank(currentUser.game.score + reward);
		let rankUp = false;

		try {
			setLoading(true);
			const newData = await completeBug(projectId, bugId, userId, {
				game: { score: reward, rank: updatedRank },
			});

			//Check if user ranked up
			if (updatedRank !== currentUser.game.rank) {
				rankUp = true;
			}
			//Update user state
			setCurrentUser({ ...newData.user });

			//Remove bug from userBugs and update.
			const bugIndex = userBugs.findIndex((userBug) => bugId === userBug._id);
			userBugs.splice(bugIndex, 1);
			setUserBugs([...userBugs]);

			//Remove bug from project bugs.
			const projectIndex = userProjects.findIndex(
				(userProject) => projectId === userProject._id
			);
			userProjects.splice(projectIndex, 1);
			setUserProjects([...userProjects, newData.project]);

			if (rankUp === true) {
				//Send to rank up page
				history.push({
					pathname: `/account/rankup`,
					state: { project: newData.project },
				});
			} else {
				//Go to project page.
				history.push({
					pathname: `/projects/${projectId}`,
					state: { project: newData.project },
				});
			}

			//Show verification message
			setCurrentVerification(newData.message);
		} catch (err) {
			console.error(err);
			setCurrentError(err.data);
		}
		setTimeout(() => setLoading(false), 1000);
	};

	//--- JSX ---
	return (
		<Container className='bug-page' fluid>
			{currentError ? <ErrorMessage currentError={currentError} /> : null}
			{currentVerification ? (
				<VerificationMessage currentVerification={currentVerification} />
			) : null}
			{bug === null ? (
				''
			) : (
				<>
					<h1 className='text-center'>{bug.title}</h1>
					<Row>
						<Col>
							<Card className='bug-details bug-card'>
								{/* <Card.Title as='h2' className='text-center'>
									Project Details
								</Card.Title>
								<Card.Body className='text-center'>
									<div className='divider'></div>
									<Row>
										<Col>
											<h3>ID:</h3>
											<p>{project._id}</p>
											<h3>Creator:</h3>
											<p>{project.creator.username}</p>
										</Col>
										<Col>
											<h3>Created At:</h3>
											<p>
												{moment(project.createdAt).format(' HH:mm, MM-DD-YYYY')}
											</p>
											<h3>Last Updated At:</h3>
											<p>
												{moment(project.updatedAt).format(' HH:mm, MM-DD-YYYY')}
											</p>
										</Col>
									</Row>
								</Card.Body> */}
								<Card.Title as='h2' className='text-center'>
									Bug Details
								</Card.Title>
								<Card.Body className='text-center'>
									<div className='divider'></div>
									<h3>ID: </h3>
									<p>{bug._id}</p>
									<h3>Project: </h3>
									<Link
										to={{
											pathname: `/projects/${bug.project.title}`,
											state: {
												project: bug.project,
											},
										}}
									>
										{bug.project.title}
									</Link>
								</Card.Body>
							</Card>
						</Col>
						<Col>
							<Card className='bug-creation bug-card'>
								<Card.Title as='h2' className='text-center'>
									Creation Details
								</Card.Title>
								<Card.Body className='text-center'>
									<div className='divider'></div>
									<h3>Creator: </h3>
									<p>{bug.creator.username}</p>
									<h3>Created: </h3>
									<p>{moment(bug.createdAt).format(' HH:mm, MM-DD-YYYY')}</p>
									<h3>Last Updated: </h3>
									<p>{moment(bug.updatedAt).format(' HH:mm, MM-DD-YYYY')}</p>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col className='text-center button-container'>
							<Button
								className='creator-privileges'
								onClick={() => onDelete(bug._id, bug.project._id)}
							>
								Delete Bug
							</Button>
							<Button
								className='assignee-privileges'
								onClick={() =>
									onComplete(bug._id, bug.project._id, currentUser._id)
								}
							>
								Mark Bug Complete
							</Button>
							{/* <Button className='assignee-privileges'>Edit Bug</Button> */}
						</Col>
					</Row>
					<Row>
						<Col>
							<Card className='bug-description-priority bug-card'>
								<Card.Title as='h2' className='text-center'>
									Creation Details
								</Card.Title>
								<Card.Body className='text-center'>
									<div className='divider'></div>
									{bug.description ? (
										<>
											<h3>Description: </h3>
											<p>{bug.description}</p>
										</>
									) : (
										''
									)}
									<h3>Priority: </h3>
									<p>{bug.priority}</p>
								</Card.Body>
							</Card>
						</Col>
					</Row>
					{/* <Row>
						<Col>
							<Card className='bug-comments'>
								<p>Comments Component</p>
							</Card>
						</Col>
					</Row> */}
				</>
			)}
		</Container>
	);
}

export default Bug;
