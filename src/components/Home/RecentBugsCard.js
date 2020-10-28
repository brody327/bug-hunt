//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

//--- Components ---

//--- CSS ---
import '../../styles/hover-card.css';

//--- Media ---
import placeholder from '../../images/placeholder-card-img.jpg'

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function RecentBugsCard() {
    //--- JSX ---
    return (
        <Card className='recent-bugs-card rounded hover-parent background-primary '>
            <Card.Img className='hover-child fade-in-half img-fade-half' src={placeholder} alt="Card image" />
            <Card.Body>
                <Card.ImgOverlay>
                    <Card.Title as='h2'>Recent Bugs</Card.Title>
                    <Card.Text className='hover-child fade-in-full' as='h4'>View recent bugs from all your projects.</Card.Text>
                </Card.ImgOverlay>
            </Card.Body>
        </Card>
    )
}

//~~~~~~~~~~~~~~~
//~~~ EXPORTS ~~~
//~~~~~~~~~~~~~~~
export default RecentBugsCard