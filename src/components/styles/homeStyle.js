import styled from 'styled-components';

const HomeContainer = styled.div`
    height: 100vh;
	width: 95%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		margin-bottom: 8px;
		font-size: 2rem;
		font-weight: 700;
		color: #38416f;
		opacity: 0;
	}

	p {
		margin-bottom: 16px;
		font-size: 1rem;
		font-weight: 600;
		color: #766b93;
		text-align: center;
		opacity: 0;
	}

	.buttons {
		margin-bottom: 16px;
		display: flex;
		justify-content: space-evenly;
		opacity: 0;

		a {
			button {
				padding: 10px 24px;
				margin-right: 8px;
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
					background-color: #e6edfc;
					color: #58caa8;
				}
			}

			:last-child {
				button {
					margin-right: 0;
				}
			}
		}
	}

	.social-media {
		display: flex;
		opacity: 0;

		a {
			text-decoration: none;

			button {
				height: 48px;
				width: 48px;
				margin-right: 8px;
				background: none;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				cursor: pointer;
				transition: 0.5s;

				i {
					font-size: 1.5rem;
					transition: 0.5s;
				}

				:hover {
					i {
						color: #ffffff;
					}
				}
			}

			:last-child {
				button {
					margin-right: 0;
				}
			}

			.github {
				border: 1px solid #484848;

				i {
					color: #484848;
				}

				:hover {
					background: #484848;
				}
			}

			.linkedin {
				border: 1px solid #2867b2;

				i {
					color: #2867b2;
				}

				:hover {
					background: #2867B2;
				}
			}

			.mail {
				border: 1px solid #d44638;

				i {
					font-size: 1.4rem;
					color: #d44638;
				}

				:hover {
					background: #d44638;
				}
			}
		}
	}

	@media (min-width: 768px) {
		width: 691.2px;
	}
`;

export default HomeContainer;