import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function Contact () {

    useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])
	  
    return (
        <>
            <h1 className='contact'>Contact</h1>
           <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Let's join, to recieve best
                </p>
                <p className='footer-subscription-text'>
                       Pogungrejo RT 01 RW 04 Kec. Bayan Kab. Purworejo, 
                </p>
                <p>
                    Tlp : 089601535870, Email : syamayaksa@gmail.com
                </p>
                {/* <div className='input-area'>
                    <form>
                        <input type="email" name="email" placeholder="Enter your email" className='footer-input' />
                        <Button buttonStyle='btn--outline'>Chat</Button>
                    </form>
                </div> */}
            </section>
          
            <section className="social-media">
                <div className="social-media-wrapper">
                        <Link to='/' className='social-logo'>Syamayaksa<i className='fa fa-typo3'></i></Link>
                        <small className='website-rights'>Syamayaksa @2021</small>
                    <div className='social-icons'>
                        <Link 
                            to='/' 
                            className='social-icon-link facebook'
                            target='_blank'
                            aria-label='Facebook'
                        >
                        <i className='fab fa-facebook'></i>
                        </Link>
                        <Link 
                            to='/' 
                            className='social-icon-link instagram'
                            target='_blank'
                            aria-label='instagram'
                        >
                        <i className='fab fa-instagram'></i>
                        </Link>
                        <Link 
                            to='/' 
                            className='social-icon-link twitter'
                            target='_blank'
                            aria-label='twitter'
                        >
                        <i className='fab fa-twitter'></i>
                        </Link>
                        <Link 
                            to='/' 
                            className='social-icon-link youtube'
                            target='_blank'
                            aria-label='youtube'
                        >
                        <i className='fab fa-youtube'></i>
                        </Link>
                        <Link 
                            to='/' 
                            className='social-icon-link linkedin'
                            target='_blank'
                            aria-label='linkedin'
                        >
                        <i className='fab fa-linkedin'></i>
                        </Link>
                        <Link 
                            to='/' 
                            className='social-icon-link github'
                            target='_blank'
                            aria-label='github'
                        >
                        <i className='fab fa-github'></i>
                        </Link>

                    </div>
                </div>

            </section>
        </div>
        </>
    )
}

export default Contact;
