//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import moment from 'moment';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

//--- Components ---
import { ErrorMessage, VerificationMessage } from '../Messages';

//--- CSS ---
import '../../styles/components/ProjectPage.css';

//--- API ---
import { deleteBug, deleteProject, completeProject } from '../../api/index';

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function ProjectPage({
	userProjects,
	setUserProjects,
	userBugs,
	setUserBugs,
	currentError,
	setCurrentError,
	currentVerification,
	setCurrentVerification,
	setLoading,
	match,
	location,
}) {
	const project = location.state.project;
	const history = useHistory();

	//--- Functions ---
	const onDeleteBug = async (bugId, projectId) => {
		try {
			setLoading(true);
			const deletedBug = await deleteBug(bugId, projectId);

			//Remove bug from userBugs and update.
			const bugIndex = userBugs.findIndex((userBug) => bugId === userBug._id);
			userBugs.splice(bugIndex, 1);
			setUserBugs([...userBugs]);

			//Remove bug from project bugs.
			const projectIndex = userProjects.findIndex(
				(userProject) => project._id === userProject._id
			);
			userProjects.splice(projectIndex, 1);
			setUserProjects([deletedBug.project, ...userProjects]);

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

	const onDeleteProject = async (project) => {
		try {
			setLoading(true);
			const deletedProject = await deleteProject(project);

			//remove bugs from user bugs
			if (deletedProject.project.bugs.length > 0) {
				deletedProject.project.bugs.forEach((bug) => {
					const bugIndex = userBugs.findIndex(
						(userBug) => userBug.id === bug._id
					);
					userBugs.splice(bugIndex, 1);
				});
				setUserBugs([...userBugs]);
			}

			//remove project from user projects
			const projectIndex = userProjects.findIndex(
				(userProject) => project._id === userProject._id
			);
			userProjects.splice(projectIndex, 1);
			setUserProjects([...userProjects]);

			//Go to projects page.
			history.push('/projects');

			//Show verification message
			setCurrentVerification(deletedProject.message);
		} catch (err) {
			console.error(err);
			setCurrentError(err);
		}
		setTimeout(() => setLoading(false), 1000);
	};

	const onCompleteProject = async (project) => {
		try {
			setLoading(true);
			const newData = await completeProject(project);

			//remove bugs from user bugs
			if (newData.project.bugs.length > 0) {
				newData.project.bugs.forEach((bug) => {
					const bugIndex = userBugs.findIndex(
						(userBug) => userBug.id === bug._id
					);
					userBugs.splice(bugIndex, 1);
				});
				setUserBugs([...userBugs]);
			}

			//remove project from user projects
			const projectIndex = userProjects.findIndex(
				(userProject) => newData.project._id === userProject._id
			);
			userProjects.splice(projectIndex, 1);
			setUserProjects([...userProjects]);

			//Go to projects page.
			history.push('/projects');

			//Refresh page
			// window.location.reload();

			//Show verification message
			setCurrentVerification(newData.message);
		} catch (err) {
			console.error(err);
			setCurrentError(err);
			alert(`Uh Oh! An error occurred: \n ${err}`);
		}
		setTimeout(() => setLoading(false), 1000);
	};

	const getRecentBugProjectName = (bug) => {
		const project = userProjects.filter(
			(project) => project._id === bug.project_id
		)[0];

		if (project) {
			return project.title;
		}
	};
	//--- JSX ---
	return (
		<Container fluid className='project-page'>
			{currentVerification ? (
				<VerificationMessage
					currentVerification={currentVerification}
					setCurrentVerification={setCurrentVerification}
				/>
			) : null}
			<h1 className='text-center'>{project.title}</h1>
			<Row>
				<Col>
					<Card className='project-card'>
						<Card.Title as='h2' className='text-center'>
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
									<div className='date-time-container text-center'>
										<p className='time'>
											{moment(project.createdAt).format('HH:mm,')}
										</p>
										<p className='date'>
											{moment(project.createdAt).format('MM-DD-YYYY')}
										</p>
									</div>
									<h3>Last Updated At:</h3>
									<div className='date-time-container text-center'>
										<p className='time'>
											{moment(project.updatedAt).format('HH:mm,')}
										</p>
										<p className='date'>
											{moment(project.updatedAt).format('MM-DD-YYYY')}
										</p>
									</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col>
					<div className='creator-privileges text-center button-container'>
						<Button onClick={() => onDeleteProject(project)}>
							Delete Project
						</Button>
						<Button onClick={() => onCompleteProject(project)}>
							Complete Project
						</Button>
					</div>
					<div className='contributor-privileges'></div>
				</Col>
			</Row>
			{project.description ? (
				<Row>
					<Col>
						<Card>
							<Card.Title as='h2' className='text-center'>
								Description
							</Card.Title>
							<Card.Body className='text-center'>
								<div className='divider'></div>
								<Card.Text>{project.description}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			) : (
				''
			)}
			{/* <Row>
				<Col>
					<Card>
						<Card.Title as='h2' className='text-center'>
							Project Contributors
						</Card.Title>
						<Card.Body className='text-center'>
							<div className='divider'></div>
							{project.contributors.map((contributor) => (
								<Card.Text key={contributor._id}>
									{contributor.username}
									{project.contributors.length > 1 ? ', ' : ''}
								</Card.Text>
							))}
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Title as='h2' className='text-center'>
							Project Stats
						</Card.Title>
						<Card.Body>
							<div className='divider'></div>
						</Card.Body>
					</Card>
				</Col>
			</Row> */}
			<Row>
				<Col>
					<Card className='project-card project-bugs'>
						<Card.Title as='h2' className='text-center'>
							Project Bugs
						</Card.Title>
						<Card.Body>
							<div className='divider'></div>
							<Row className='text-center'>
								<Col>
									<Link to={{ pathname: '/bugs/new', state: { project } }}>
										<Button>Create Bug</Button>
									</Link>
								</Col>
							</Row>
							<Row className='bugs-list'>
								{project.bugs.length === 0 ? (
									<div>
										<Card.Text as='h5'>
											No bugs were found for this project. Click on "Create Bug"
											to begin tracking this project's issues.
										</Card.Text>
									</div>
								) : (
									<Table id='project-bugs-table'>
										<thead>
											<tr>
												<th>Date</th>
												<th>Bug</th>
												<th>Severity</th>
												<th>Actions</th>
											</tr>
										</thead>
										<tbody>
											{project.bugs.map((bug) => (
												<tr key={bug._id}>
													<td>
														{moment(bug.updatedAt).format('HH:mm, MM-DD-YYYY')}
													</td>
													<td>
														<Link
															to={{
																pathname: `/bugs/${bug.name}`,
																state: {
																	bug: bug,
																	project: project,
																},
															}}
														>
															{bug.name}
														</Link>
													</td>
													<td>
														{userBugs
															? userBugs.filter(
																	(userBug) => userBug._id === bug._id
															  )[0].priority
															: ''}
													</td>
													<td>
														<Button
															onClick={() => onDeleteBug(bug._id, project._id)}
														>
															Delete Bug
														</Button>
													</td>
												</tr>
											))}
										</tbody>
									</Table>
								)}
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row></Row>
		</Container>
	);
}

export default ProjectPage;
