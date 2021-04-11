import styled from 'styled-components';

export const HomeContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: center;
	margin: 0 auto;
	width: 95%;

	.name {
		margin-bottom: 8px;
		font-size: 2.5rem;
	}

	.about {
		margin-bottom: 16px;
		text-align: center;
	}

	.company-link {
		color: #58caa8;
		transition: 0.25s;
		
		:hover {
			color: #766b93;
		}
	}

	.navigation-buttons {
		margin-bottom: 16px;

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

	.social-buttons {
		display: flex;

		a {
			button {
				align-items: center;
				background: none;
				border-radius: 50%;
				cursor: pointer;
				display: flex;
				height: 48px;
				justify-content: center;
				margin-right: 8px;
				transition: 0.25s;
				width: 48px;

				i {
					font-size: 1.5rem;
					transition: 0.25s;
				}

				:hover {
					i {
						color: #ffffff;
					}
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
					background: #2867b2;
				}
			}

			.email {
				border: 1px solid #d44638;

				i {
					color: #d44638;
					font-size: 1.4rem;
				}

				:hover {
					background: #d44638;
				}
			}

			:last-child {
				button {
					margin-right: 0;
				}
			}
		}
	}

	.no-opacity {
		opacity: 0;
	}

	@media (min-width: 768px) {
		max-width: 691.2px;
	}
`;