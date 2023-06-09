// components/Header.js
import React from 'react';
import headshot from '../assets/headshot.jpeg';
import '../index.css';

const Header = () => {
	return (
		<div>
			<header>
				<div className="flex items-center justify-center pt-6">
					<img
						src={headshot}
						alt="Headshot"
						className="drop-shadow-2xl rounded-full border border-solid  border-8 border-gray-800 object-scale-down h-80 w-80 max-h-80 max-w-80"
					/>
				</div>
				<h1 className="text-center font-weight-500 text-6xl mt-2 mb-1">
					Jack R. Harrington
				</h1>
				<h2 className="text-center font-weight-300 text-2xl italic">
					Stevens Computer Science 2024
				</h2>
			</header>
		</div>
	);
};

export default Header;
