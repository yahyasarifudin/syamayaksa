import React, {useEffect} from 'react';
import '../../App.css';
import Card from '../Card';


function Services(){

	useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])
	  
	return (
		<>
			 <h1 className='services'>Services</h1>
			 <Card/>
		</>
	)
}

export default Services;
