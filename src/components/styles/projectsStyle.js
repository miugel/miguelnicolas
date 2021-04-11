import styled from 'styled-components';
// import viewee1 from '../../assets/images/projects/viewee1.JPG';
import loothunters1 from '../../assets/images/projects/loothunters1.JPG';
import loothunters2 from '../../assets/images/projects/loothunters2.JPG';
import readrr1 from '../../assets/images/projects/readrr1.JPG';
import readrr2 from '../../assets/images/projects/readrr2.JPG';
import apiarykeyboards1 from '../../assets/images/projects/apiarykeyboards1.JPG';
import apiarykeyboards2 from '../../assets/images/projects/apiarykeyboards2.JPG';
import njcovid1 from '../../assets/images/projects/njcovid1.JPG';
// import bestbud1 from '../../assets/images/projects/bestbud1.JPG';
// import bestbud2 from '../../assets/images/projects/bestbud2.JPG';
import opti1 from '../../assets/images/projects/opti1.JPG';
import opti2 from '../../assets/images/projects/opti2.JPG';
import githubclone1 from '../../assets/images/projects/githubclone1.JPG';
import miguelnicolas1 from '../../assets/images/projects/miguelnicolas1.JPG';

export const ProjectsContainer = styled.div`
    width: 95%;
    margin: 0 auto;
    margin-top: 64px;
    margin-bottom: 64px;

    .back {
        margin-bottom: 16px;
        background: none;
        border: none;
        font-family: 'Quicksand', sans-serif;
        font-size: 1rem;
        font-weight: 600;
        color: #38416f;
        cursor: pointer;

        i {
            margin: 0 4px;
            font-size: 0.75rem;
            transition: 0.25s;
        }

        :hover {
            i {
                margin-right: 8px;
                margin-left: 0;
            }
        }
    }

    h1 {
        margin-bottom: 32px;
        font-size: 2rem;
        font-weight: 700;
        color: #38416f;
        text-align: center;
    }

    .project-container {
        .project {
            margin-bottom: 32px;
            background-color: #ffffff;
            border-radius: 3px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

            .project-image {
                height: 50.6249999999vw;
                border-top-left-radius: 3px;
                border-top-right-radius: 3px;
                transition: 0.5s;
            }

            .project-description {
                padding: 16px;

                h2 {
                    margin-bottom: 4px;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #38416f;
                }

                .role {
                    margin-bottom: 4px;
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: #766b93;
                }
        
                .tech-stack {
                    margin-bottom: 4px;
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: #766b93;
                }
        
                .description {
                    font-size: 1rem;
                    font-weight: 600;
                    color: #766b93;

                    b {
                        margin-left: 16px;
                        color: #38416f;
                        cursor: pointer;
                    }
                }

                ul {
                    margin-top: 16px;
                    margin-left: 16px;
                    font-size: 1rem;
                    font-weight: 600;
                    color: #766b93;

                    li {
                        margin-bottom: 8px;
                    }
                }
        
                button {
                    margin-top: 16px;
                    margin-right: 8px;
                    padding: 10px 16px;
                    background-color: #58caa8;
                    border: 1px solid #58caa8;
                    border-radius: 3px;
                    outline: none;
                    font-family: 'Quicksand', sans-serif;
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: #ffffff;
                    cursor: pointer;
                    transition: 0.5s;
        
                    :hover {
                        background: none;
                        color: #58caa8;
                    }
                }
            }
        }

        // .project:nth-child(1) {
        //     .project-image {
        //         background: url();
        //         background-size: cover;
        //     }
        // }

        .project:nth-child(1) {
            .project-image {
                background: url(${readrr1});
                background-size: cover;
            
                :hover {
                    background: url(${readrr2});
                    background-size: cover;
                }
            }
        }

        .project:nth-child(2) {
            .project-image {
                background: url(${apiarykeyboards1});
                background-size: cover;
            
                :hover {
                    background: url(${apiarykeyboards2});
                    background-size: cover;
                }
            }
        }

        .project:nth-child(3) {
            .project-image {
                background: url(${loothunters1});
                background-size: cover;
            
                :hover {
                    background: url(${loothunters2});
                    background-size: cover;
                }
            }
        }

        .project:nth-child(4) {
            .project-image {
                background: url(${njcovid1});
                background-size: cover;
            }
        }

        // .project:nth-child(5) {
        //     .project-image {
        //         background: url();
        //         background-size: cover;

        //         :hover {
        //             background: url();
        //             background-size: cover;
        //         }
        //     }
        // }

        .project:nth-child(5) {
            .project-image {
                background: url(${opti1});
                background-size: cover;

                :hover {
                    background: url(${opti2});
                    background-size: cover;
                }
            }
        }

        .project:nth-child(6) {
            .project-image {
                background: url(${githubclone1});
                background-size: cover;
            }
        }

        .project:nth-child(7) {
            .project-image {
                background: url(${miguelnicolas1});
                background-size: cover;
            }
        }
    }

    .checkout-container {
        display: flex;
        justify-content: center;

        .checkout {
            text-decoration: none;
    
            button {
                background: none;
                border: none;
                font-family: 'Quicksand', sans-serif;
                font-size: 1rem;
                font-weight: 600;
                color: #38416f;
                cursor: pointer;
    
                i {
                    margin: 0 4px;
                    font-size: 0.75rem;
                    transition: 0.25s;
                }
    
                :hover {
                    i {
                        margin-left: 8px;
                        margin-right: 0;
                    }
                }
            }
        }
    }

    @media (min-width: 375px) {
        .project-container {
            .project {
                .project-description {
                    button {
                        padding: 10px 24px;
                    }
                }
            }
        }
    }

    @media (min-width: 1024px) {
        width: 972.8px;

        .project-container {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: wrap;
            
            .project {
                width: 470.4px;

                .project-image {
                    height: 263px;
                }
            }
        }
    }
`;