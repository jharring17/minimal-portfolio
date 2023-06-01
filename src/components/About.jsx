// components/About.js
import React from 'react';
import '../index.css';

const About = () => {
	return (
		<section id="about">
			<h3 className="text-center font-medium text-3xl mt-12">A Little About Me</h3>
			<p className="drop-shadow-lg bg-opacity-75 bg-white border-l-[5px] border-slate-900 pl-[10px] py-[5px] text-left text-semibold text-xl font-size-sm w-1/2 mx-auto mb-6">
				Hi, I'm Jack! I'm a passionate and self-motivated computer science student. I'm
				currently pursuing my undergraduate degree in Computer Science at Stevens Institute
				of Technology with a minor in Cybersecurity. I've explored many different areas of
				computer science including: web programming, database management, and software
				engineering. I'm looking forward to applying my skills in a professional setting.
				You can email me{' '}
				<a
					href="mailto:jackharrington1117@gmail.com"
					className="font-bold text-purple-400 hover:underline"
				>
					here
				</a>
				. Thank you for visiting my portfolio!
			</p>
		</section>
	);
};

export default About;
