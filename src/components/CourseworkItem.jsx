import React from 'react';

function CourseworkItem({ course }) {
	return (
		<p className="text-xl cursor-default bg-black text-white drop-shadow-lg inline-block mx-2 my-2 px-2 py-1 font-semibold border-2 rounded-lg border-stone-900">
			{course}
		</p>
	);
}

export default CourseworkItem;
