import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import opti from '../img/opti.jpg';
import farmfresh from '../img/farmfresh.jpg';
import githubclone from '../img/githubclone.jpg';
import guacfetch from '../img/guacfetch.jpg';
import numbers from '../img/numbers.jpg';
import guacmarket from '../img/guacmarket.jpg';
import netflixclone from '../img/netflixclone.jpg';
import whenwilliretire from '../img/whenwilliretire.jpg';
import split from '../img/split.jpg';
import yodebt from '../img/yodebt.jpg';
import miguelnicolas from '../img/miguelnicolas.jpg';

const ProjectsContainer = styled.div`
    width: 304px;
    margin: 0 auto;
    margin-top: 64px;
    margin-bottom: 64px;

    .back-button {
        margin-bottom: 16px;
        text-decoration: none;
        color: black;
        display: flex;
        align-items: center;

        i {
            margin-left: 8px;
            font-size: 1rem;
            color: #38416F;
            transition: 0.5s;
        }

        p {
            margin-left: 4px;
            font-size: 1rem;
            font-weight: 500;
            color: #38416F;
            transition: 0.5s;
        }

        :hover {
            i {
                margin-left: 0;
            }

            p {
                margin-left: 12px;
            }
        }
    }

    h1 {
        margin-bottom: 32px;
        font-size: 2rem;
        font-weight: 700;
        color: #38416F;
        text-align: center;
    }

    .project-container {
        width: 100%;

        .project {
            width: 100%;
            margin-bottom: 32px;
            background: white;
            border-radius: 3px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

            .project-image {
                a {
                    img {
                        width: 100%;
                        border-top-left-radius: 3px;
                        border-top-right-radius: 3px;
                    }
                }
            }

            .project-description {
                padding: 16px;

                h2 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #38416F;
                }
        
                .tech-stack {
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: #766B93;
                }
        
                .description {
                    margin-bottom: 8px;
                    font-size: 1rem;
                    font-weight: 500;
                    color: #766B93;
                }
        
                button {
                    margin-right: 8px;
                    padding: 8px 20px;
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
                        background: white;
                        color: #58CAA8;
                    }
                }
            }
        }
    }

    @media (min-width: 375px) {
		width: 337.5px;
    }
    
    @media (min-width: 414px) {
		width: 372.6px;
    }
    
    @media (min-width: 522px) {
        width: 470.4px;
    }

    @media (min-width: 1024px) {
        width: 921.6px;

        .project-container {
            display: flex;
            flex-wrap: wrap;
            
            .project {
                width: 444.8px;
                margin-right: 32px;
            }

            .project:nth-child(2n) {
                margin-right: 0;
            }
        }
    }
`

const Projects = () => {
    return (
        <ProjectsContainer>
            <Link className='back-button' to='/'>
                <i className='fas fa-arrow-left'></i>
                <p>go back</p>
            </Link>
            <h1>projects</h1>

            <div className='project-container'>

                <div className='project'>
                    <div className='project-image'>
                    <a href='https://opti.netlify.com/' target='_blank' rel='noopener noreferrer'><img src={opti} alt='opti'/></a>
                    </div>
                    <div className='project-description'>
                        <h2>Opti</h2>
                        <p className='tech-stack'>React | styled-components | Node | Express | PostgreSQL</p>
                        <p className='description'>A web app that uses historical data to determine the optimal price for an AirBnB listing.</p>
                        <a href='https://opti.netlify.com/' target='_blank' rel='noopener noreferrer'><button>view project</button></a>
                        <a href='https://github.com/Build-Week-Airbnb-Optimal-Price-4/Front-End' target='_blank' rel='noopener noreferrer'><button>view source</button></a>
                    </div>
                </div>

                <div className='project'>
                    <div className='project-image'>
                        <a href='https://farmfreshapp.netlify.com/' target='_blank' rel='noopener noreferrer'><img src={farmfresh} alt='farm fresh'/></a>
                    </div>
                    <div className='project-description'>
                        <h2>Farm Fresh</h2>
                        <p className='tech-stack'>React | CSS | GreenSock | Node | Express | PostgreSQL</p>
                        <p className='description'>A web app that connects farmers with a surplus amount of food and their community.</p>
                        <a href='https://farmfreshapp.netlify.com/' target='_blank' rel='noopener noreferrer'><button>view project</button></a>
                        <a href='https://github.com/farmFreshProduce/frontEnd' target='_blank' rel='noopener noreferrer'><button>view source</button></a>
                    </div>
                </div>

                <div className='project'>
                    <div className='project-image'>
                        <a href='https://githubclone.guacdev.com/' target='_blank' rel='noopener noreferrer'><img src={githubclone} alt='github clone'/></a>
                    </div>
                    <div className='project-description'>
                        <h2>GitHub Clone</h2>
                        <p className='tech-stack'>React | styled-components</p>
                        <p className='description'>A GitHub clone that allows you to search for users and see their details.</p>
                        <a href='https://githubclone.guacdev.com/' target='_blank' rel='noopener noreferrer'><button>view project</button></a>
                        <a href='https://github.com/miugel/guacDev/tree/githubclone' target='_blank' rel='noopener noreferrer'><button>view source</button></a>
                    </div>
                </div>

                <div className='project'>
                    <div className='project-image'>
                        <a href='https://fetch.guacdev.com/' target='_blank' rel='noopener noreferrer'><img src={guacfetch} alt='guacfetch'/></a>
                    </div>
                    <div className='project-description'>
                        <h2>guacFetch</h2>
                        <p className='tech-stack'>React | styled-components</p>
                        <p className='description'>A Postman clone that allows you to make API requests and view responses.</p>
                        <a href='https://fetch.guacdev.com/' target='_blank' rel='noopener noreferrer'><button>view project</button></a>
                        <a href='https://github.com/miugel/guacDev/tree/fetch' target='_blank' rel='noopener noreferrer'><button>view source</button></a>
                    </div>
                </div>

                <div className='project'>
                    <div className='project-image'>
                        <a href='https://numbersapp.netlify.com/' target='_blank' rel='noopener noreferrer'><img src={numbers} alt='numbers'/></a>
                    </div>
                    <div className='project-description'>
                        <h2>Numbers</h2>
                        <p className='tech-stack'>React | styled-components | Node | Express | PostgreSQL</p>
                        <p className='description'>A real estate investment analyzer</p>
                        <a href='https://numbersapp.netlify.com/' target='_blank' rel='noopener noreferrer'><button>view project</button></a>
                        <a href='https://github.com/numbersapp/Front-End' target='_blank' rel='noopener noreferrer'><button>view source</button></a>
                    </div>
                </div>

                <div className='project'>
                    <div className='project-image'>
                        <a href='https://market.guacdev.com/' target='_blank' rel='noopener noreferrer'><img src={guacmarket} alt='guacmarket'/></a>
                    </div>
                    <div className='project-description'>
                        <h2>guacMarket</h2>
                        <p className='tech-stack'>React | styled-components</p>
                        <p className='description'>A stock research application</p>
                        <a href='https://market.guacdev.com/' target='_blank' rel='noopener noreferrer'><button>view project</button></a>
                        <a href='https://github.com/miugel/guacDev/tree/market' target='_blank' rel='noopener noreferrer'><button>view source</button></a>
                    </div>
                </div>

                <div className='project'>
                    <div className='project-image'>
                        <a href='https://netflixclone.guacdev.com/' target='_blank' rel='noopener noreferrer'><img src={netflixclone} alt='netflix clone'/></a>
                    </div>
                    <div className='project-description'>
                        <h2>Netflix Clone</h2>
                        <p className='tech-stack'>React | styled-components | Node | Express</p>
                        <p className='description'>A Netflix clone that allows you to perform CRUD operations.</p>
                        <a href='https://netflixclone.guacdev.com/' target='_blank' rel='noopener noreferrer'><button>view project</button></a>
                        <a href='https://github.com/miugel/guacDev/tree/netflixclone' target='_blank' rel='noopener noreferrer'><button>view source</button></a>
                    </div>
                </div>

                <div className='project'>
                    <div className='project-image'>
                        <a href='https://whenwilliretire.tech/' target='_blank' rel='noopener noreferrer'><img src={whenwilliretire} alt='when will i retire?'/></a>
                    </div>
                    <div className='project-description'>
                        <h2>When Will I Retire?</h2>
                        <p className='tech-stack'>HTML | CSS | JavaScript</p>
                        <p className='description'>A retirement advisor that estimates your retirement date based on your current habits.</p>
                        <a href='https://whenwilliretire.tech/' target='_blank' rel='noopener noreferrer'><button>view project</button></a>
                        <a href='https://github.com/miugel/When-Will-I-Retire' target='_blank' rel='noopener noreferrer'><button>view source</button></a>
                    </div>
                </div>

                <div className='project'>
                    <div className='project-image'>
                        <a href='https://splitapp.netlify.com/' target='_blank' rel='noopener noreferrer'><img src={split} alt='split'/></a>
                    </div>
                    <div className='project-description'>
                        <h2>Split</h2>
                        <p className='tech-stack'>HTML | CSS</p>
                        <p className='description'>A bill-splitting app</p>
                        <a href='https://splitapp.netlify.com/' target='_blank' rel='noopener noreferrer'><button>view project</button></a>
                        <a href='https://github.com/build-sprint-split-the-bill/ui-interface-miguel' target='_blank' rel='noopener noreferrer'><button>view source</button></a>
                    </div>
                </div>

                <div className='project'>
                    <div className='project-image'>
                        <a href='https://yodebt.tech/' target='_blank' rel='noopener noreferrer'><img src={yodebt} alt='yodebt'/></a>
                    </div>
                    <div className='project-description'>
                        <h2>YoDebt</h2>
                        <p className='tech-stack'>HTML | CSS | Java | DialogFlow</p>
                        <p className='description'>A student loan assistant</p>
                        <a href='https://yodebt.tech/' target='_blank' rel='noopener noreferrer'><button>view project</button></a>
                        <a href='https://github.com/miugel/YoDebt' target='_blank' rel='noopener noreferrer'><button>view source</button></a>
                    </div>
                </div>

                <div className='project'>
                    <div className='project-image'>
                        <Link to='/'><img src={miguelnicolas} alt='miguelnicolas'/></Link>
                    </div>
                    <div className='project-description'>
                        <h2>miguelnicolas.dev</h2>
                        <p className='tech-stack'>React | styled-components | GreenSock</p>
                        <p className='description'>My personal website</p>
                        <Link to='/'><button>view project</button></Link>
                        <a href='https://github.com/miugel/miguelnicolas.dev' target='_blank' rel='noopener noreferrer'><button>view source</button></a>
                    </div>
                </div>

            </div>
        </ProjectsContainer>
    );
};

export default Projects;