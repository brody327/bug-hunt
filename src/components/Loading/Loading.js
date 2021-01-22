//~~~~~~~~~~~~~~~
//~~~ IMPORTS ~~~
//~~~~~~~~~~~~~~~
import React from 'react';

//--- Bootstrap ---
import Image from 'react-bootstrap/Image';

//--- Media ---
import logo from '../../images/logo4.png';

//--- CSS ---

//~~~~~~~~~~~~~~~~~
//~~~ COMPONENT ~~~
//~~~~~~~~~~~~~~~~~
function Loading() {
	return (
		<div className='loader'>
			<Image src={logo} fluid />
		</div>
	);
}

export default Loading;
