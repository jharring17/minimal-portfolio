// components/Projects.js
import React from 'react';
import pickup from '../assets/website.png';
import family_tree from '../assets/family-tree.png';
import algorithms from '../assets/algorithms.png';
import website from '../assets/website-code.png';

const Projects = () => {
	return (
		<section id="projects">
			<h2 className="text-center font-medium text-3xl mb-2 mt-12">My Projects</h2>
			<div className="flex flex-col justify-center items-center">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
					<div className="bg-slate-200 hover:bg-slate-300 border border-solid rounded-lg border-2 border-gray-800 mb-4 shadow shadow-lg">
						<a
							href="https://github.com/rvaccone/CS-546-Final-Project"
							target="_blank"
							rel="noopener noreferrer"
							className="w-full h-full"
						>
							<img
								src={pickup}
								alt="Court Reservation Website"
								className="h-80 w-full max-h-80 max-w-80"
							/>
							<h3 className="text-left font-medium text-xl ml-2 pt-2 pb-2">
								Court Reservation Website
							</h3>
							<p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs p-2">
								<span className="text-lg inline-block px-2 py-1 font-semibold border-2 rounded-lg border-stone-900 bg-red-400 hover:bg-red-500">
									HTML
								</span>
								<span className="text-lg inline-block px-2 py-1 font-semibold border-2 rounded-lg border-stone-900 bg-blue-400 hover:bg-blue-500">
									CSS
								</span>
								<span className="text-lg inline-block px-2 py-1 font-semibold border-2 rounded-lg border-stone-900 bg-yellow-400 hover:bg-yellow-500">
									JavaScript
								</span>
								<span className="text-lg inline-block px-2 py-1 font-semibold border-2 rounded-lg border-stone-900 bg-orange-400 hover:bg-orange-500">
									Handlebars
								</span>
							</p>
						</a>
					</div>
					<div className="bg-slate-200 hover:bg-slate-300 border border-solid rounded-lg border-2 border-gray-800 mb-4 shadow shadow-lg">
						<a
							href="https://github.com/jharring17/GEDCOM-group-project"
							target="_blank"
							rel="noopener noreferrer"
							className="w-full h-full"
						>
							<img
								src={website}
								alt="Minimal Portfolio"
								className="h-80 w-full max-h-80 max-w-80"
							/>
							<h3 className="text-left font-medium text-xl ml-2 pt-2 pb-2">
								Minimal Portfolio Website
							</h3>
							<p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs p-2">
								<span className="text-lg inline-block px-2 py-1 font-semibold border-2 rounded-lg border-stone-900 bg-red-400 hover:bg-red-500">
									HTML
								</span>
								<span className="text-lg inline-block px-2 py-1 font-semibold border-2 rounded-lg border-stone-900 bg-blue-300 hover:bg-blue-400">
									React
								</span>
								<span className="text-lg inline-block px-2 py-1 font-semibold border-2 rounded-lg border-stone-900 bg-teal-300 hover:bg-teal-400">
									Tailwind
								</span>
							</p>
						</a>
					</div>
					<div className="bg-slate-200 hover:bg-slate-300 border border-solid rounded-lg border-2 border-gray-800 mb-4 shadow shadow-lg">
						<a
							href="https://github.com/jharring17/AlgorithmPractice"
							target="_blank"
							rel="noopener noreferrer"
							className="w-full h-full"
						>
							<img
								src={algorithms}
								alt="Algorithm Practice"
								className="h-80 w-full max-h-80 max-w-80"
							/>
							<h3 className="text-left font-medium text-xl ml-2 pt-2 pb-2">
								Algorithm Practice
							</h3>
							<p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs p-2">
								<span className="text-lg inline-block px-2 py-1 font-semibold border-2 rounded-lg border-stone-900 bg-blue-400 hover:bg-blue-500">
									Python
								</span>
							</p>
						</a>
					</div>
					<div className="bg-slate-200 hover:bg-slate-300 border border-solid rounded-lg border-2 border-gray-800 mb-4 shadow shadow-lg">
						<a
							href="https://github.com/jharring17/GEDCOM-group-project"
							target="_blank"
							rel="noopener noreferrer"
							className="w-full h-full"
						>
							<img
								src={family_tree}
								alt="GEDCOM Parser"
								className="h-80 w-full max-h-80 max-w-80"
							/>
							<h3 className="text-left font-medium text-xl ml-2 pt-2 pb-2">
								GEDCOM Data Parser
							</h3>
							<p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs p-2">
								<span className="text-lg inline-block px-2 py-1 font-semibold border-2 rounded-lg border-stone-900 bg-blue-400 hover:bg-blue-500">
									Python
								</span>
							</p>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
