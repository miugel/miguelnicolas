import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectsContainer from './styles/projectsStyle';

const Projects = props => {
    const [viewMore, setViewMore] = useState({
        readrr: false,
        loothunters: false,
        opti: false
    });

    return (
        <ProjectsContainer>
            <button className='back' onClick={() => props.history.push('/')}><i className='fas fa-chevron-left'></i>back</button>

            <h1>notable projects</h1>

            <div className='project-container'>

                {/* <div className='project'>
                    <a href='https://viewee.netlify.app/' target='_blank' rel='noopener noreferrer'><div className='project-image'></div></a>
                    <div className='project-description'>
                        <h2>viewee</h2>
                        <p className='role'>Role: Full stack</p>
                        <p className='tech-stack'>React | styled-components | Node | Express | PostgreSQL</p>
                        <p className='description'>A web app that allows students to view, answer, and post tech job interview questions</p>
                        <a href='https://viewee.netlify.app/' target='_blank' rel='noopener noreferrer'><button>view project</button></a>
                        <a href='https://github.com/viewee' target='_blank' rel='noopener noreferrer'><button>view source</button></a>
                    </div>
                </div> */}

                <div className='project'>
                    <a href='https://readrr.app/' target='_blank' rel='noopener noreferrer'><div className='project-image'></div></a>
                    <div className='project-description'>
                        <h2>Readrr</h2>
                        <p className='role'>Role: Fullstack engineer</p>
                        <p className='tech-stack'>React | styled-components | Node | Express | PostgreSQL | AWS</p>
                        <p className='description'>
                            A platform that allows users to browse a database of books and manage their own library
                            <b className='view-more' onClick={() => setViewMore({...viewMore, readrr: !viewMore.readrr})}>{viewMore.readrr ? 'view less' : 'view more'}</b>
                        </p>
                        {viewMore.readrr && (
                            <ul>
                                <li>Implemented Google and Facebook authentication on the frontend and backend, providing a smooth onboarding process for 100s of users</li>
                                <li>Built the frontend working closely with the designer, utilizing the agile methodology</li>
                            </ul>
                        )}
                        <a href='https://readrr.app/' target='_blank' rel='noopener noreferrer'><button>view project</button></a>
                        <a href='https://github.com/Lambda-School-Labs/betterreads-fe' target='_blank' rel='noopener noreferrer'><button>view source</button></a>
                    </div>
                </div>

                <div className='project'>
                    <a href='https://apiarykeyboards.now.sh/' target='_blank' rel='noopener noreferrer'><div className='project-image'></div></a>
                    <div className='project-description'>
                        <h2>Apiary Keyboards</h2>
                        <p className='role'>Role: Sole engineer</p>
                        <p className='tech-stack'>React | styled-components | Stripe</p>
                        <p className='description'>An ecommerce site built for a small business that builds custom keyboards</p>
                        <a href='https://apiarykeyboards.now.sh/' target='_blank' rel='noopener noreferrer'><button>view project</button></a>
                        <a href='https://github.com/miugel/apiarykeyboards' target='_blank' rel='noopener noreferrer'><button>view source</button></a>
                    </div>
                </div>

                <div className='project'>
                    <a href='https://loothunters.netlify.app/' target='_blank' rel='noopener noreferrer'><div className='project-image'></div></a>
                    <div className='project-description'>
                        <h2>Loot Hunters 3</h2>
                        <p className='role'>Role: Fullstack engineer</p>
                        <p className='tech-stack'>React | styled-components | Python | Django | PostgreSQL</p>
                        <p className='description'>
                            An adventure game with an infinite number of rooms to wander
                            <b className='view-more' onClick={() => setViewMore({...viewMore, loothunters: !viewMore.loothunters})}>{viewMore.loothunters ? 'view less' : 'view more'}</b>
                        </p>
                        {viewMore.loothunters && (
                            <ul>
                                <li>Developed the entire user interface and integrated a Django backend enabling game functionality</li>
                            </ul>
                        )}
                        <a href='https://loothunters.netlify.app/' target='_blank' rel='noopener noreferrer'><button>view project</button></a>
                        <a href='https://github.com/loothunters3' target='_blank' rel='noopener noreferrer'><button>view source</button></a>
                    </div>
                </div>

                <div className='project'>
                    <a href='https://njcovid.now.sh/' target='_blank' rel='noopener noreferrer'><div className='project-image'></div></a>
                    <div className='project-description'>
                        <h2>NJCovid</h2>
                        <p className='role'>Role: Sole engineer</p>
                        <p className='tech-stack'>React | styled-components</p>
                        <p className='description'>A website that provides information about the Coronavirus to New Jersey residents</p>
                        <a href='https://njcovid.now.sh/' target='_blank' rel='noopener noreferrer'><button>view project</button></a>
                        <a href='https://github.com/miugel/njcovid' target='_blank' rel='noopener noreferrer'><button>view source</button></a>
                    </div>
                </div>

                {/* <div className='project'>
                    <a href='https://bestbudapp.netlify.app/' target='_blank' rel='noopener noreferrer'><div className='project-image'></div></a>
                    <div className='project-description'>
                        <h2>bestBud</h2>
                        <p className='role'>Role: Fullstack</p>
                        <p className='tech-stack'>React | styled-components | Node | Express | PostgreSQL</p>
                        <p className='description'>A web app that educates new medical cannabis consumers and allows them to find the right strain as a means to battle medical conditions and ailments</p>
                        <a href='https://bestbudapp.netlify.app/' target='_blank' rel='noopener noreferrer'><button>view project</button></a>
                        <a href='https://github.com/bestbudapp' target='_blank' rel='noopener noreferrer'><button>view source</button></a>
                    </div>
                </div> */}

                <div className='project'>
                    <a href='https://opti.netlify.app/' target='_blank' rel='noopener noreferrer'><div className='project-image'></div></a>
                    <div className='project-description'>
                        <h2>Opti</h2>
                        <p className='role'>Role: Frontend engineer</p>
                        <p className='tech-stack'>React | styled-components | Node | Express | PostgreSQL</p>
                        <p className='description'>
                            A web app that uses historical data to determine the optimal price for an AirBnB listing
                            <b className='view-more' onClick={() => setViewMore({...viewMore, opti: !viewMore.opti})}>{viewMore.opti ? 'view less' : 'view more'}</b>
                        </p>
                        {viewMore.opti && (
                            <ul>
                                <li>Developed the entire user interface and implemented a RESTful API enabling users to manage their own listings</li>
                            </ul>
                        )}
                        <a href='https://opti.netlify.app/' target='_blank' rel='noopener noreferrer'><button>view project</button></a>
                        <a href='https://github.com/tryopti/frontend' target='_blank' rel='noopener noreferrer'><button>view source</button></a>
                    </div>
                </div>

                <div className='project'>
                    <a href='https://githubclone.now.sh/' target='_blank' rel='noopener noreferrer'><div className='project-image'></div></a>
                    <div className='project-description'>
                        <h2>GitHub Clone</h2>
                        <p className='role'>Role: Sole engineer</p>
                        <p className='tech-stack'>React | styled-components</p>
                        <p className='description'>A GitHub clone that allows you to search for users and see their details</p>
                        <a href='https://githubclone.now.sh/' target='_blank' rel='noopener noreferrer'><button>view project</button></a>
                        <a href='https://github.com/miugel/githubclone' target='_blank' rel='noopener noreferrer'><button>view source</button></a>
                    </div>
                </div>

                <div className='project'>
                    <Link to='/'><div className='project-image'></div></Link>
                    <div className='project-description'>
                        <h2>miguelnicolas.dev</h2>
                        <p className='role'>Role: Sole engineer</p>
                        <p className='tech-stack'>React | styled-components | GreenSock</p>
                        <p className='description'>My personal website</p>
                        <Link to='/'><button>view project</button></Link>
                        <a href='https://github.com/miugel/miguelnicolas' target='_blank' rel='noopener noreferrer'><button>view source</button></a>
                    </div>
                </div>

                {/* <div className='project'>
                    <div className='project-image'>
                        <a href='https://farmfreshapp.netlify.com/' target='_blank' rel='noopener noreferrer'><img src={farmfresh} alt='farm fresh'/></a>
                    </div>
                    <div className='project-description'>
                        <h2>Farm Fresh</h2>
                        <p className='tech-stack'>React | CSS | GreenSock | Node | Express | PostgreSQL</p>
                        <p className='description'>A web app that connects farmers with a surplus amount of food and their community.</p>
                        <a href='https://farmfreshapp.netlify.com/' target='_blank' rel='noopener noreferrer'><button>view project</button></a>
                        <a href='https://github.com/farmfreshapp/frontend' target='_blank' rel='noopener noreferrer'><button>view source</button></a>
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
                        <a href='https://github.com/numbersapp/frontend' target='_blank' rel='noopener noreferrer'><button>view source</button></a>
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

                Project deleted
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
                        <a href='https://github.com/miugel/whenwilliretire' target='_blank' rel='noopener noreferrer'><button>view source</button></a>
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
                        <a href='https://github.com/trysplit/user-interface-miguel' target='_blank' rel='noopener noreferrer'><button>view source</button></a>
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
                </div> */}

            </div>

            <div className='checkout-container'>
                <a href='https://github.com/miugel' target='_blank' rel='noopener noreferrer' className='checkout'><button>Check out my other projects on GitHub!<i className='fas fa-chevron-right'></i></button></a>
            </div>
        </ProjectsContainer>
    );
};

export default Projects;