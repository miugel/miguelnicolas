import React, {useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {gsap, TweenMax, Power3} from 'gsap';

gsap.registerPlugin(TweenMax, Power3);

const HomeContainer = styled.div`
	height: 100vh;
	width: 304px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		margin-bottom: 8px;
		font-size: 2rem;
		font-weight: 700;
		color: #38416F;
		opacity: 0;
	}

	p {
		margin-bottom: 16px;
		font-size: 1rem;
		font-weight: 500;
		color: #766B93;
		text-align: center;
		opacity: 0;
	}

	.buttons {
		margin-bottom: 16px;
		display: flex;
		justify-content: space-evenly;
		opacity: 0;

		a {
			button {
				margin: 0 4px;
				padding: 8px 12px;
				background: #58CAA8;
				border: 1px solid #58CAA8;
				border-radius: 3px;
				outline: none;
				font-family: 'Quicksand', sans-serif;
				font-size: 0.875rem;
				font-weight: 500;
				color: whitesmoke;
				cursor: pointer;
				transition: 0.5s;

				:hover {
					background: #E6EDFC;
					color: #58CAA8;
				}
			}
		}
	}

	.icons {
		display: flex;
		opacity: 0;

		a {
			text-decoration: none;

			.github {
				height: 48px;
				width: 48px;
				margin: 0 4px;
				border: 1px solid #484848;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				transition: 0.5s;

				i {
					font-size: 1.5rem;
					color: #484848;
					transition: 0.5s;
				}

				:hover {
					background: #484848;

					i {
						color: whitesmoke;
					}
				}
			}

			.linkedin {
				height: 48px;
				width: 48px;
				margin: 0 4px;
				border: 1px solid #2867B2;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				transition: 0.5s;

				i {
					font-size: 1.5rem;
					color: #2867B2;
					transition: 0.5s;
				}

				:hover {
					background: #2867B2;

					i {
						color: whitesmoke;
					}
				}
			}

			.mail {
				height: 48px;
				width: 48px;
				margin: 0 4px;
				border: 1px solid #D44638;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				transition: 0.5s;

				i {
					font-size: 1.4rem;
					color: #D44638;
					transition: 0.5s;
				}

				:hover {
					background: #D44638;

					i {
						color: whitesmoke;
					}
				}
			}
		}
	}

	@media (min-width: 375px) {
		width: 337.5px;

		.buttons {
			a {
				button {
					padding: 8px 16px;
				}
			}
		}
	}

	@media (min-width: 414px) {
		width: 372.6px;
	}

	@media (min-width: 768px) {
		width: 691.2px;
	}

	@media (min-width: 1024px) {
		.buttons {
			a {
				button {
					padding: 8px 20px;
				}
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
			<p ref={element => {bio = element}}>Hi! I'm a full stack software engineer passionate about high-quality interfaces and pleasant user experiences. Based in New Jersey.</p>
			<div className='buttons' ref={element => {buttons = element}}>
				{/* <a href='#'><button>skills</button></a> */}
				<Link to='/projects'><button>projects</button></Link>
				<a href='https://drive.google.com/open?id=1WFbYOtAdXCVpceKfEr9jy-tQyqflldGh' target='_blank' rel='noopener noreferrer'><button>resume</button></a>
				{/* <a href='#'><button>blog</button></a> */}
			</div>
			<div className='icons' ref={element => {icons = element}}>
				<a href='https://github.com/miugel' target='_blank' rel='noopener noreferrer'><div className='github'><i className='fab fa-github'></i></div></a>
				<a href='https://www.linkedin.com/in/miguelqnicolas/' target='_blank' rel='noopener noreferrer'><div className='linkedin'><i className='fab fa-linkedin-in'></i></div></a>
				<a href='mailto:miguelqnicolas@gmail.com' target='_blank' rel='noopener noreferrer'><div className='mail'><i className='fas fa-envelope'></i></div></a>
			</div>
		</HomeContainer>
    );
};

export default Home;