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

//--- Components ---

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
	setLoading,
	loadingWait,
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
		} catch (err) {
			console.error(err);
			setCurrentError(err);
			alert(`Uh Oh! An error occurred: \n ${err}`);
		}
		setTimeout(() => setLoading(false), 1000);
	};

	const onCompleteProject = async (project) => {
		console.log(project);
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
			window.location.reload();
		} catch (err) {
			console.error(err);
			setCurrentError(err);
			alert(`Uh Oh! An error occurred: \n ${err}`);
		}
		setTimeout(() => setLoading(false), 1000);
	};

	//--- JSX ---
	return (
		<Container fluid>
			<h1>{project.title}</h1>
			<Row>
				<Col>
					<Card>
						<h2>Project Info</h2>
						<p>ID: {project._id}</p>
						<p>Project Creator: {project.creator.username}</p>
						<p>
							Project Created At:
							{moment(project.createdAt).format(' HH:mm MM-DD-YYYY')}
						</p>
						<p>
							Project Last Updated At:
							{moment(project.updatedAt).format(' HH:mm MM-DD-YYYY')}
						</p>
					</Card>
					<div className='text-center'>
						<Button onClick={() => onDeleteProject(project)}>
							Delete Project
						</Button>
						<Button onClick={() => onCompleteProject(project)}>
							Complete Project
						</Button>
					</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<Card>
						<h2>Project Contributors</h2>
						<div>
							{project.contributors.map((contributor) => (
								<Card.Text key={contributor._id}>
									{contributor.username}
									{project.contributors.length > 1 ? ', ' : ''}
								</Card.Text>
							))}
						</div>
					</Card>
				</Col>
				<Col>
					<Card>
						<h2>Project Stats</h2>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col>
					<Card>
						<h2>Project Bugs</h2>
						<div>
							<Link to={{ pathname: '/bugs/new', state: { project } }}>
								<Button>Create Bug</Button>
							</Link>
						</div>
						<div className='bugs-list'>
							{project.bugs.map((bug) => (
								<Container>
									<Row>
										<Link
											to={{
												pathname: `/bugs/${bug._id}`,
												state: { bug, project },
											}}
											key={bug._id}
										>
											<Card.Text>{bug.name}</Card.Text>
										</Link>
										<Button onClick={() => onDeleteBug(bug._id, project._id)}>
											Delete Bug
										</Button>
									</Row>
								</Container>
							))}
						</div>
					</Card>
				</Col>
			</Row>
			<Row></Row>
		</Container>
	);
}

export default ProjectPage;
