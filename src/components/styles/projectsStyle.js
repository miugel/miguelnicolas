import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    width: 95%;
    margin: 0 auto;
    margin-top: 32px;
    margin-bottom: 64px;

    h1 {
        margin-bottom: 32px;
        text-align: center;
    }

    .projects-container {
        .project {
            background-color: #ffffff;
            border-radius: 3px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            margin-bottom: 32px;

            // To do: add image to projects data and pass in as prop
            .project-image {
                background: url();
                background-size: cover;
                border-top-left-radius: 3px;
                border-top-right-radius: 3px;
                height: 50.6249999999vw;
                transition: 0.25s;
                
                :hover {
                    background: url();
                    background-size: cover;
                }
            }

            .project-description {
                padding: 16px;

                h2 {
                    margin-bottom: 4px;
                }

                .role {
                    font-size: 0.875rem;
                    font-weight: 500;
                    margin-bottom: 4px;
                }
        
                .tech-stack {
                    font-size: 0.875rem;
                    font-weight: 500;
                    margin-bottom: 4px;
                }
        
                .description {
                    b {
                        color: #38416f;
                        cursor: pointer;
                        margin-left: 16px;
                    }
                }

                .links {
                    margin-top: 16px;

                    a {
                        button {
                            margin-right: 8px;
                        }

                        :last-child {
                            button {
                                margin-right: 0;
                            }
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 1024px) {
        width: 972.8px;

        .projects-container {
            align-items: flex-start;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            
            .project {
                width: 470.4px;

                .project-image {
                    height: 263px;
                }
            }
        }
    }
`;