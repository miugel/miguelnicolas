import React from 'react';
import SkillsContainer from './styles/skillsStyle';

const Skills = props => {
    return (
        <SkillsContainer>
            <button className='back' onClick={() => props.history.push('/')}><i className='fas fa-chevron-left'></i>go back</button>

            <h1>skills</h1>

            <div>
                <h2>front end</h2>
                
            </div>

            <p>Checkout more of my skills on my resume!</p>
        </SkillsContainer>
    );
};

export default Skills;