//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//--- Components ---
import { RecentProjectCard, RecentBugsCard, AllProjectsCard, AllBugsCard, ViewAccountCard } from './index';

//--- CSS ---
import './Home.css'

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function Home() {
    //--- JSX ---
    return (
        <Container id='home' fluid>
            <Row>
                <Col>
                    <RecentProjectCard />
                </Col>
                <Col>
                    <RecentBugsCard />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AllProjectsCard />
                </Col>
                <Col>
                    <AllBugsCard />
                </Col>
                <Col>
                    <ViewAccountCard />
                </Col>
            </Row>

        </Container>
    )
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default Home
