import React from 'react';
import coursework from '../data/coursework';
import CourseworkItem from './CourseworkItem';

function Coursework() {
	return (
		<div className="flex flex-row justify-center my-10">
			<div className="w-full items-center justify-center md:w-7/12">
				<h3 className="text-center font-medium text-3xl">Coursework</h3>
				{coursework.map((item) => (
					<CourseworkItem course={item.course} />
				))}
			</div>
		</div>
	);
}

export default Coursework;
