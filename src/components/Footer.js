import React from 'react';
import { Button } from './Button';
import './Footer.css';
import {Link} from 'react-router-dom'

function Footer () {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Let's join, to recieve best
                </p>
                <p className='footer-subscription-text'>
                    Subscribe to news update
                </p>
                <div className='input-area'>
                    <form>
                        <input type="email" name="email" placeholder="Enter your email" className='footer-input' />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Term of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='sign-up'>How it Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Term of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Video</h2>
                        <Link to='sign-up'>How it Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Term of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='sign-up'>How it Works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Term of Service</Link>
                    </div>
                </div>
            </div>
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

                    </div>
                </div>

            </section>
        </div>
    );
}

export default Footer;