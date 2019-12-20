import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import farmfresh from '../img/farmfresh.png';
import githubclone from '../img/githubclone.png';
import guacmarket from '../img/guacmarket.png';
import whenwilliretire from '../img/whenwilliretire.png';
import split from '../img/split1.png';
import yodebt from '../img/yodebt1.png';
import miguelnicolas from '../img/miguelnicolas.png';

const ProjectsContainer = styled.div`
    width: 500px;
    margin: 0 auto;
    margin-top: 64px;
    margin-bottom: 64px;

    a {
        text-decoration: none;
        color: black;
        p {
            font-weight: 500;

            i {
                margin-right: 5px;
            }
        }

        p {

        }
    }

    h1 {
        margin-top: 16px;
        margin-bottom: 32px;
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
    }

    .project {
        width: 500px;
        margin: 0 auto;
        margin-bottom: 48px;
        padding: 24px;
        border-radius: 5px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

        img {
            width: 452px;
            margin-bottom: 8px;
            border: 1px solid lightgray;
            border-radius: 5px;
        }

        p {
            font-weight: 500;
        }

        .tech-stack {
            margin-top: 1px;
            margin-bottom: 8px;
            font-weight: 400;
            font-style: italic;
        }

        button {
            margin-right: 8px;
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
`

const Projects = () => {
    return (
        <ProjectsContainer>
            <Link to='/'><p><i className="fas fa-arrow-left"></i>go back</p></Link>
            <h1>Projects</h1>

            <div className='project'>
                <img src={farmfresh} alt='website'/>
                <h2>Farm Fresh</h2>
                <p>A web application that connects farmers with a surplus amount of food and the local community</p>
                <p className='tech-stack'>HTML, CSS, styled-components, GSAP, JavaScript, React, React Router, Context API, axios, Node, PostgreSQL</p>
                <a href='https://farmfreshapp.netlify.com/' target='_blank' rel="noopener noreferrer"><button>visit website</button></a>
                <a href='https://github.com/farmFreshProduce' target='_blank' rel="noopener noreferrer"><button>repository</button></a>
            </div>

            <div className='project'>
                <img src={githubclone} alt='website'/>
                <h2>GitHub Clone</h2>
                <p>A GitHub clone that allows you to search for users</p>
                <p className='tech-stack'>HTML, CSS, styled-components, JavaScript, React, axios</p>
                <a href='https://githubclone.guacdev.com/' target='_blank' rel="noopener noreferrer"><button>visit website</button></a>
                <a href='https://github.com/miugel/guacDev/tree/githubclone' target='_blank' rel="noopener noreferrer"><button>repository</button></a>
            </div>

            <div className='project'>
                <img src={guacmarket} alt='website'/>
                <h2>guacMarket</h2>
                <p>A stock market research application</p>
                <p className='tech-stack'>HTML, CSS, styled-components, JavaScript, React, React Router, Redux, axios</p>
                <a href='https://market.guacdev.com/' target='_blank' rel="noopener noreferrer"><button>visit website</button></a>
                <a href='https://github.com/miugel/guacDev/tree/market' target='_blank' rel="noopener noreferrer"><button>repository</button></a>
            </div>

            <div className='project'>
                <img src={whenwilliretire} alt='website'/>
                <h2>When Will I Retire?</h2>
                <p>A retirement advisor</p>
                <p className='tech-stack'>HTML, CSS, JavaScript</p>
                <a href='https://whenwilliretire.tech/' target='_blank' rel="noopener noreferrer"><button>visit website</button></a>
                <a href='https://github.com/miugel/When-Will-I-Retire' target='_blank' rel="noopener noreferrer"><button>repository</button></a>
            </div>

            <div className='project'>
                <img src={split} alt='website'/>
                <h2>Split</h2>
                <p>A bill-splitting app</p>
                <p className='tech-stack'>HTML, CSS, JavaScript, React</p>
                <a href='https://splitapp.netlify.com/' target='_blank' rel="noopener noreferrer"><button>visit website</button></a>
                <a href='https://github.com/build-sprint-split-the-bill/ui-interface-miguel' target='_blank' rel="noopener noreferrer"><button>repository</button></a>
            </div>

            <div className='project'>
                <img src={yodebt} alt='website'/>
                <h2>YoDebt</h2>
                <p>A student loan assistant</p>
                <p className='tech-stack'>HTML, CSS, JavaScript, Java, DialogFlow</p>
                <a href='https://yodebt.tech/' target='_blank' rel="noopener noreferrer"><button>visit website</button></a>
                <a href='https://github.com/miugel/YoDebt' target='_blank' rel="noopener noreferrer"><button>repository</button></a>
            </div>

            <div className='project'>
                <img src={miguelnicolas} alt='website'/>
                <h2>miguelnicolas.dev</h2>
                <p>My personal website</p>
                <p className='tech-stack'>HTML, CSS, styled-components, JavaScript, React, React Router</p>
                <Link to='/'><button>visit website</button></Link>
                <a href='https://github.com/miugel/miguelnicolas.dev' target='_blank' rel="noopener noreferrer"><button>repository</button></a>
            </div>
        </ProjectsContainer>
    );
};

export default Projects;