import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap, TweenMax, Power3 } from 'gsap';
import { socials } from 'assets';
import { Button } from './common';
import { HomeContainer } from './styles';

gsap.registerPlugin(TweenMax, Power3);

export const Home = () => {
    let name = useRef(null);
    let about = useRef(null);
    let navigationButtons = useRef(null);
    let socialButtons = useRef(null);

    useEffect(() => {
        TweenMax.to(name, 1, {
                opacity: 1,
                y: -48,
                ease: Power3.easeOut,
                delay: 0.25
            }
        );
        TweenMax.to(about, 1, {
                opacity: 1,
                y: -48,
                ease: Power3.easeOut,
                delay: 0.5
            }
        );
        TweenMax.to(navigationButtons, 1, {
                opacity: 1,
                y: -48,
                ease: Power3.easeOut,
                delay: 0.75
            }
        );
        TweenMax.to(socialButtons, 1, {
                opacity: 1,
                y: -48,
                ease: Power3.easeOut,
                delay: 1
            }
        );
    });

    return (
        <HomeContainer>
            <h1 className='name no-opacity' ref={element => {name = element}}>miguel nicolas</h1>
            <p className='about no-opacity' ref={element => {about = element}}>
                Hi! I'm a software developer based in New Jersey passionate about high-quality interfaces and pleasant user experiences. Currently at <a className='company-link' href='https://www.shopify.com/about' target='_blank' rel='noopener noreferrer'>Shopify</a>.
            </p>
            <div className='navigation-buttons no-opacity' ref={element => {navigationButtons = element}}>
                <Link to='/skills'><Button text='skills' /></Link>
            </div>
            <div className='social-buttons no-opacity' ref={element => {socialButtons = element}}>
                {socials.map((social, index) => (
                    <a href={social.link} target='_blank' rel='noopener noreferrer' key={index}>
                        <button className={social.name}><i className={social.icon}></i></button>
                    </a>
                ))}
            </div>
        </HomeContainer>
    );
};