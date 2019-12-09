import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	max-width: 500px;
	height: 90vh;
	width: 90%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		margin-bottom: 8px;
		font-size: 2rem;
		font-weight: 700;
	}

	p {
		margin-bottom: 8px;
		font-size: 1rem;
		font-weight: 500;
		text-align: center;
	}

	a {
		text-decoration: none;
		color: dodgerblue;
	}

	.buttons {
		margin-bottom: 8px;
		display: flex;
		justify-content: space-evenly;

		button {
			margin: 0 0.25rem;
			padding: 4px 8px;
			background: #EFF3F6;
			border: 1px solid lightgray;
			border-radius: 3px;
			outline: none;
			font-family: 'Quicksand', sans-serif;
			font-size: 0.75rem;
			font-weight: 500;
			cursor: pointer;
			transition: 0.25s ease-in-out;

			:hover {
				border: 1px solid gray;
			}
		}
	}

	.icons {
		a {
			i {
				margin: 0 0.25rem;
				font-size: 1.5rem;
				color: black;
			}
			transition: 0.25s ease-in-out;

			:hover {
				opacity: 0.75;
			}
		}
	}
`  

const App = () => {
	return (
		<Container>
			<h1>miguel nicolas</h1>
			<p>Hi! I'm a front end software engineer based in New Jersey. Currently attending Lambda School.</p>
			<div className='buttons'>
				<button>Skills</button>
				<button>Projects</button>
				<button>Resume</button>
				<button>Blog</button>
			</div>
			<div className='icons'>
				<a href='https://github.com/miugel' target='_blank' rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
				<a href='https://www.linkedin.com/in/miguelqnicolas/' target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
				<a href='mailto:miguelqnicolas@gmail.com' target='_blank' rel="noopener noreferrer"><i className="fas fa-envelope-square"></i></a>
			</div>
		</Container>
	);
};

export default App;
