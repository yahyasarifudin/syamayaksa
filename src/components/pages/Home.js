import React, {useEffect} from 'react';
import '../../App.css'
import HeroSection from '../HeroSection'
import Card from '../Card';
import Footer from '../Footer';

function Home(){

	useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])
	  
	return (
			<>
				<HeroSection/>
				<Card />
				<Footer />
			</>
		);
}

export default Home;