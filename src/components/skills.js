import React from 'react';
import SkillsContainer from './styles/skillsStyle';
import html from '../img/skills/html.png';
import css from '../img/skills/css.png';
import javascript from '../img/skills/javascript.png';
import python from '../img/skills/python.png';
import react from '../img/skills/react.png';
import styledcomponents from '../img/skills/styled-components.png';
import sass from '../img/skills/sass.png';
import node from '../img/skills/node.png';
import express from '../img/skills/express.png';
import postgresql from '../img/skills/postgresql.png';
import git from '../img/skills/git.png';
import aws from '../img/skills/aws.png';

const Skills = props => {
    return (
        <SkillsContainer>
            <button className='back' onClick={() => props.history.push('/')}><i className='fas fa-chevron-left'></i>back</button>

            <h1>skills</h1>

            <h2>languages</h2>
            <div className='group'>
                <div className='item'>
                    <img src={html} alt='html' />
                    <p>HTML</p>
                </div>
                <div className='item'>
                    <img src={css} alt='css' />
                    <p>CSS</p>
                </div>
                <div className='item'>
                    <img src={javascript} alt='javascript' />
                    <p>JavaScript</p>
                </div>
                <div className='item'>
                    <img src={python} alt='python' />
                    <p>Python</p>
                </div>
            </div>

            <h2>frontend</h2>
            <div className='group'>
                <div className='item'>
                    <img src={react} alt='react' />
                    <p>React</p>
                </div>
                <div className='item'>
                    <img src={styledcomponents} alt='styled-components' />
                    <p>styled-components</p>
                </div>
                <div className='item'>
                    <img src={sass} alt='sass' />
                    <p>Sass</p>
                </div>
            </div>

            <h2>backend</h2>
            <div className='group'>
                <div className='item'>
                    <img src={node} alt='node' />
                    <p>Node</p>
                </div>
                <div className='item'>
                    <img src={express} alt='express' />
                    <p>Express</p>
                </div>
                <div className='item'>
                    <img src={postgresql} alt='postgresql' />
                    <p>PostgreSQL</p>
                </div>
            </div>

            <h2>general technologies</h2>
            <div className='group'>
                <div className='item'>
                    <img src={git} alt='git' />
                    <p>Git</p>
                </div>
                <div className='item'>
                    <img src={aws} alt='aws' />
                    <p>AWS</p>
                </div>
            </div>
        </SkillsContainer>
    );
};

export default Skills;