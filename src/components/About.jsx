// components/About.js
import React from 'react';
import '../index.css';

const About = () => {
	return (
		<section id="about">
			<h3 className="font-medium text-3xl mt-6">A Little About Me</h3>
			<p className="text-left text-semibold text-xl font-size-sm w-1/2 mx-auto mb-6">
				Hi, I'm Jack! I'm a passionate and self-motivated computer science student. I'm
				currently pursuing my undergraduate degree in Computer Science at Stevens Institute
				of Technology with a minor in Cybersecurity. I've explored many different areas of
				computer science including: web programming, database management, and software
				engineering. I'm looking forward to applying my skills in a professional setting.
				You can email me{' '}
				<a
					href="mailto:jackharrington1117@gmail.com"
					className="font-bold text-teal-500 hover:underline"
				>
					here
				</a>
				. Thank you for visiting my portfolio!
			</p>
		</section>
	);
};

export default About;
