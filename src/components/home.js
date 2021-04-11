import React, { useRef, useEffect } from 'react';
import { gsap, TweenMax, Power3 } from 'gsap';
import { socials } from 'assets';
import { HomeContainer } from './styles';

gsap.registerPlugin(TweenMax, Power3);

export const Home = () => {
    let name = useRef(null);
    let about = useRef(null);
    let socialButtons = useRef(null);

    useEffect(() => {
        TweenMax.to(name, 1, {
                opacity: 1,
                y: -48,
                ease: Power3.easeOut,
                delay: 0.15
            }
        );
        TweenMax.to(about, 1, {
                opacity: 1,
                y: -48,
                ease: Power3.easeOut,
                delay: 0.3
            }
        );
        TweenMax.to(socialButtons, 1, {
                opacity: 1,
                y: -48,
                ease: Power3.easeOut,
                delay: 0.45
            }
        );
    });

    return (
        <HomeContainer>
            <h1 className='name no-opacity' ref={element => {name = element}}>miguel nicolas</h1>
            <p className='about no-opacity' ref={element => {about = element}}>
                Hi! I'm a software developer based in New Jersey passionate about high-quality interfaces and pleasant user experiences. Currently at <a className='company-link' href='https://www.shopify.com/about' target='_blank' rel='noopener noreferrer'>Shopify</a>.
            </p>
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