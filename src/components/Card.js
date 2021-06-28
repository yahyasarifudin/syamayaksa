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
								<Carditem src='../images/Blue.jpeg' text='Professional Partner of Web Application ur Digital Solutions' label='Application' path='/services'/>
								 <Carditem
						              src='../images/img-2.jpg'
						              text='Travel through the Islands of Bali in a Private Cruise'
						              label='Luxury'
						              path='/services'
						            />
								</ul>
								 <ul className='cards__items'>
					            <Carditem
					              src='../images/img-2.jpg'
					              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
					              label='Mystery'
					              path='/services'
					            />
					            <Carditem
					              src='../images/img-2.jpg'
					              text='Experience Football on Top of the Himilayan Mountains'
					              label='Adventure'
					              path='/products'
					            />
					            <Carditem
					              src='../images/img-2.jpg'
					              text='Ride through the Sahara Desert on a guided camel tour'
					              label='Adrenaline'
					              path='/sign-up'
					            />
					          </ul>
						</div>
					</div>
			</div>
		);
}
export default Card;