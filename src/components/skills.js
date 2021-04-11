import React from 'react';
import { skills } from 'assets';
import { Breadcrumbs, CallToAction } from './common';
import { SkillsContainer } from './styles';
import * as images from 'assets/images/skills';

export const Skills = () => {
    return (
        <SkillsContainer>
            <Breadcrumbs />

            <h1>skills</h1>

            {skills.map((category, index) => (
                <div key={index}>
                    <h2>{category.category}</h2>
                    <div className='category'>
                        {category.items.map((skill, id) => (
                            <div className='skill' key={id}>
                                <img src={images[skill.toLowerCase().replace(/-/g, '')]} alt={skill} />
                                <p>{skill}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <CallToAction link='https://www.linkedin.com/in/miguelqnicolas/' text='Check out my LinkedIn for more!' />
        </SkillsContainer>
    );
};