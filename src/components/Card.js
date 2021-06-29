import React from 'react';
import Carditem from './Carditem';
import './Card.css';

function Card () {
	return (
			<div>
				<h1>Check out our services!</h1>
					<div className="cards__container">
						<div className="cards__wrapper">
							<ul className='cards__items'>
								<Carditem src='../images/Blue.jpeg' text='Professional Partner Web or Mobile Application' label='Application' path='/services'/>
								 <Carditem
						              src='../images/img-1.jpg'
						              text='Extract information from large number of data sets and processing'
						              label='Big Data'
						              path='/services'
						            />
								</ul>
								 <ul className='cards__items'>
					            <Carditem
					              src='../images/img-4.jpeg'
					              text='Cybersecurity strategies that prevents unauthorized access to organizational assets such as computers, networks, and data.'
					              label='IT Scurity'
					              path='/services'
					            />
					            <Carditem
					              src='../images/img-5.png'
					              text='Seeking help and advice about business and IT problems'
					              label='IT Consultant'
					              path='/products'
					            />
					            <Carditem
					              src='../images/img-6.jpg'
					              text="Analyze and confirm a company or organization's IT, technical and business needs"
					              label='IT Analyst'
					              path='/sign-up'
					            />
					          </ul>
						</div>
					</div>
			</div>
		);
}
export default Card;