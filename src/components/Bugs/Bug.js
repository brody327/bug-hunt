//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

//--- Components ---
import { ErrorMessage } from '../Error';

//--- CSS ---

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
	currentUser,
	setCurrentUser,
	match,
	location,
}) {
	//--- State ---
	const [bug, setBug] = useState(null);
	const [project, setProject] = useState(null);

	const bugData = location.state.bug;
	const projectData = location.state.project;

	const history = useHistory();

	//--- Effects ---
	//Set bug to location bug.
	useEffect(() => {
		let mounted = true;
		if (!bug) {
			getBugById(bugData._id)
				.then((response) => {
					if (mounted) setBug(response.bug);
				})
				.catch((error) => {
					console.log(error);
				});
		}
		return () => (mounted = false);
	}, []);

	//--- Functions ---
	const onDelete = async (bugId, projectId) => {
		try {
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
		} catch (err) {
			console.error(err);
			setCurrentError(err);
			alert(`Uh Oh! An error occurred: \n ${err}`);
		}
	};

	const onComplete = async (bugId, projectId, userId) => {
		const reward = getBugReward(bug.priority);
		const updatedRank = getRank(currentUser.game.score);
		let rankUp = false;

		try {
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
					pathname: `/user/rankup`,
				});
			} else {
				//Go to project page.
				history.push({
					pathname: `/projects/${projectId}`,
					state: { project: newData.project },
				});
			}
		} catch (err) {
			console.error(err);
			setCurrentError(err.data);
			alert(`Uh Oh! An error occurred: \n ${err.data}`);
		}

		//Update account info (both rank and score)
		//update account squashed bugs
		//direct to completed bug page
	};

	//--- JSX ---
	return (
		<Container fluid>
			{currentError ? <ErrorMessage currentError={currentError} /> : null}
			{bug === null ? (
				<Alert variant='danger'>Sorry we could not find your bug!</Alert>
			) : (
				<>
					<h1 className='text-center'>{bug.title}</h1>
					<Row>
						<Col>
							<Card>
								<Row>
									<Col>
										<Card.Body>
											<p>ID: {bug._id}</p>
											<p>Name: {bug.title}</p>
											<p>Project: {bug.project.title}</p>
										</Card.Body>
									</Col>
								</Row>
							</Card>
						</Col>
						<Col>
							<Card>
								<Row>
									<Col>
										<Card.Body>
											<p>Creator: {bug.creator.username}</p>
											<p>
												Created:{' '}
												{moment(bug.createdAt).format(' HH:mm MM-DD-YYYY')}
											</p>
											<p>
												Last Updated:{' '}
												{moment(bug.updatedAt).format(' HH:mm MM-DD-YYYY')}
											</p>
										</Card.Body>
									</Col>
								</Row>
							</Card>
						</Col>
					</Row>
					<div className='creator-privileges'>
						<Button onClick={() => onDelete(bug._id, bug.project._id)}>
							Delete Bug
						</Button>
					</div>
					<div className='assignee-privileges'>
						<Button
							onClick={() =>
								onComplete(bug._id, bug.project._id, currentUser._id)
							}
						>
							Mark Bug Complete
						</Button>
						<Button>Edit Bug</Button>
					</div>
					<Row>
						<Col>
							<Card>
								<Row>
									<Col>
										<Card.Body>
											<p>{bug.description}</p>
											<p>{bug.priority}</p>
										</Card.Body>
									</Col>
								</Row>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col>
							<Card>
								<p>Comments Component</p>
							</Card>
						</Col>
					</Row>
				</>
			)}
		</Container>
	);
}

export default Bug;
