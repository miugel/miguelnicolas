import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeContainer from './styles/homeStyle';
import { gsap, TweenMax, Power3 } from 'gsap';

gsap.registerPlugin(TweenMax, Power3);

const Home = () => {
    let name = useRef(null);
    let bio = useRef(null);
    let buttons = useRef(null);
    let socialMedia = useRef(null);

    useEffect(() => {
        TweenMax.to(name, 1, {
                opacity: 1,
                y: -50,
                ease: Power3.easeOut,
                delay: 0.1
            }
        );
        TweenMax.to(bio, 1, {
                opacity: 1,
                y: -50,
                ease: Power3.easeOut,
                delay: 0.2
            }
        );
        TweenMax.to(buttons, 1, {
                opacity: 1,
                y: -50,
                ease: Power3.easeOut,
                delay: 0.3
            }
        );
        TweenMax.to(socialMedia, 1, {
                opacity: 1,
                y: -50,
                ease: Power3.easeOut,
                delay: 0.4
            }
        );
    }, [])

    return (
        <HomeContainer>
			<h1 ref={element => {name = element}}>miguel nicolas</h1>
			<p ref={element => {bio = element}}>Hi! I'm a full stack software engineer based in New Jersey passionate about high-quality interfaces and pleasant user experiences.</p>
			<div className='buttons' ref={element => {buttons = element}}>
				{/* <Link to='/skills'><button>skills</button></Link> */}
				<Link to='/projects'><button>projects</button></Link>
				<a href='https://drive.google.com/file/d/1Wxb1ke2bRlKGpkvZVlgHLhzlgu_f_qDo/view?usp=sharing' target='_blank' rel='noopener noreferrer'><button>resume</button></a>
			</div>
			<div className='social-media' ref={element => {socialMedia = element}}>
				<a href='https://github.com/miugel' target='_blank' rel='noopener noreferrer'><button className='github'><i className='fab fa-github'></i></button></a>
				<a href='https://www.linkedin.com/in/miguelqnicolas/' target='_blank' rel='noopener noreferrer'><button className='linkedin'><i className='fab fa-linkedin-in'></i></button></a>
				<a href='mailto:miguelqnicolas@gmail.com' target='_blank' rel='noopener noreferrer'><button className='mail'><i className='fas fa-envelope'></i></button></a>
			</div>
		</HomeContainer>
    );
};

export default Home;