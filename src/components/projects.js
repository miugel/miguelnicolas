import React from 'react';
import { projects } from 'assets';
import { Breadcrumbs, Button, CallToAction } from './common';
import { ProjectsContainer } from './styles';

export const Projects = () => (
    <ProjectsContainer>
        <Breadcrumbs />

        <h1>notable projects</h1>

        <div className='projects-container'>
            {projects.map((project, index) => (
                <div className='project' key={index}>
                    <a href={project.deployedLink} target='_blank' rel='noopener noreferrer'>
                        <div className='project-image' />
                    </a>
                    <div className='project-description'>
                        <h2>{project.name}</h2>
                        <p className='role'>Role: {project.role}</p>
                        <p className='tech-stack'>{project.techStack}</p>
                        <p className='description'>{project.description}</p>
                        <div className='links'>
                            <a href={project.deployedLink} target='_blank' rel='noopener noreferrer'><Button text='view project' /></a>
                            <a href={project.repositoryLink} target='_blank' rel='noopener noreferrer'><Button text='view source' /></a>
                        </div>
                    </div>
                </div>
            ))}

            {/* To do: add collapsible feature */}
        </div>

        <CallToAction link='https://github.com/miugel' text='Check out my GitHub for more!' />
    </ProjectsContainer>
);