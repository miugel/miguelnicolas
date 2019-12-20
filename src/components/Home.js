import React, {useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {gsap, TweenMax, Power3} from 'gsap';

gsap.registerPlugin(TweenMax, Power3);

const HomeContainer = styled.div`
	max-width: 500px;
	height: 100vh;
	width: 90%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		margin-bottom: 8px;
		font-size: 2rem;
		font-weight: 700;
		opacity: 0;
	}

	p {
		margin-bottom: 16px;
		font-size: 1rem;
		font-weight: 500;
		text-align: center;
		opacity: 0;
	}

	a {
		text-decoration: none;
		color: dodgerblue;
	}

	.buttons {
		margin-bottom: 16px;
		display: flex;
		justify-content: space-evenly;
		opacity: 0;

		a {
			button {
				margin: 0 0.25rem;
				padding: 4px 8px;
				background: #EFF3F6;
				border: 1px solid lightgray;
				border-radius: 3px;
				outline: none;
				font-family: 'Quicksand', sans-serif;
				font-size: 0.75rem;
				font-weight: 500;
				cursor: pointer;
				transition: 0.25s ease-in-out;

				:hover {
					border: 1px solid gray;
				}
			}
		}
	}

	.icons {
		opacity: 0;
		a {
			i {
				margin: 0 0.25rem;
				font-size: 1.5rem;
				color: black;
			}
			transition: 0.25s ease-in-out;

			:hover {
				opacity: 0.5;
			}
		}
	}
`

const Home = () => {
    let name = useRef(null);
    let bio = useRef(null);
    let buttons = useRef(null);
    let icons = useRef(null);

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
        TweenMax.to(icons, 1, {
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
			<p ref={element => {bio = element}}>Hi! I'm a front end software engineer based in New Jersey. Currently attending Lambda School.</p>
			<div className='buttons' ref={element => {buttons = element}}>
				{/* <button>Skills</button> */}
				<Link to='/projects'><button>Projects</button></Link>
				<a href='https://drive.google.com/file/d/1UE3d9wdHmqvzTADKTcEqM94HBSp4Zf8z/view?usp=sharing' target='_blank' rel="noopener noreferrer"><button>Resume</button></a>
				{/* <button>Blog</button> */}
			</div>
			<div className='icons' ref={element => {icons = element}}>
				<a href='https://github.com/miugel' target='_blank' rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
				<a href='https://www.linkedin.com/in/miguelqnicolas/' target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
				<a href='mailto:miguelqnicolas@gmail.com' target='_blank' rel="noopener noreferrer"><i className="fas fa-envelope-square"></i></a>
			</div>
		</HomeContainer>
    );
};

export default Home;